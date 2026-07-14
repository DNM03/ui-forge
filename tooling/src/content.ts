import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";

import YAML from "yaml";

import { loadCatalogs } from "./catalog.js";
import { compileMarkdown } from "./markdown.js";
import { provenanceRoot, referencesRoot, resolveInside } from "./paths.js";
import type { GeneratedDoc, GeneratedManifest, ProvenanceSource, SearchRecord } from "./types.js";

interface SourceDocument {
  reviewed_at: string;
  sources: ProvenanceSource[];
  standards: ProvenanceSource[];
}

async function readCanonicalFiles(paths: string[]): Promise<{ digest: string; contents: Map<string, string> }> {
  const contents = new Map<string, string>();
  const hash = createHash("sha256");

  for (const filePath of [...paths].sort()) {
    const content = await readFile(filePath, "utf8");
    contents.set(filePath, content);
    hash.update(filePath.replaceAll("\\", "/"));
    hash.update("\0");
    hash.update(content);
    hash.update("\0");
  }

  return { digest: hash.digest("hex"), contents };
}

export async function buildManifest(): Promise<GeneratedManifest> {
  const referenceNames = (await readdir(referencesRoot))
    .filter((name) => /^\d{2}-[a-z0-9-]+\.md$/.test(name))
    .sort();
  if (referenceNames.length === 0) throw new Error("No reference Markdown files found");

  const referencePaths = referenceNames.map((name) => resolveInside(referencesRoot, name));
  const { files: catalogPaths, items: catalog } = await loadCatalogs();
  const sourcesPath = resolveInside(provenanceRoot, "sources.yaml");
  const extractionPath = resolveInside(provenanceRoot, "extraction-map.csv");
  const noticesPath = resolveInside(provenanceRoot, "THIRD_PARTY_NOTICES.md");
  const canonicalPaths = [...referencePaths, ...catalogPaths, sourcesPath, extractionPath, noticesPath];
  const { digest, contents } = await readCanonicalFiles(canonicalPaths);

  const docs: GeneratedDoc[] = [];
  for (let index = 0; index < referenceNames.length; index += 1) {
    const name = referenceNames[index];
    const filePath = referencePaths[index];
    if (!name || !filePath) throw new Error("Reference path alignment failed");
    const compiled = await compileMarkdown(contents.get(filePath) ?? "", name);
    const slug = name.replace(/^\d{2}-/, "").replace(/\.md$/, "");
    docs.push({ slug, ...compiled });
  }
  docs.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

  const orders = new Set<number>();
  for (const doc of docs) {
    if (orders.has(doc.order)) throw new Error(`Duplicate document order: ${doc.order}`);
    orders.add(doc.order);
  }

  const sourceDocument = YAML.parse(contents.get(sourcesPath) ?? "") as SourceDocument;
  if (!sourceDocument.reviewed_at || !Array.isArray(sourceDocument.sources) || !Array.isArray(sourceDocument.standards)) {
    throw new Error("provenance/sources.yaml has an invalid shape");
  }

  const search: SearchRecord[] = [
    ...docs.map((doc) => ({
      id: `doc:${doc.slug}`,
      type: "doc" as const,
      title: doc.title,
      summary: doc.summary,
      body: doc.plainText,
      tags: ["reference", doc.slug],
      url: `/docs/${doc.slug}/`,
    })),
    ...catalog.map((item) => ({
      id: `${item.kind}:${item.id}`,
      type: item.kind,
      title: item.title,
      summary: item.summary,
      body: [item.intent, ...item.checks, ...item.warnings, ...item.exceptions].join(" "),
      tags: [...new Set([...item.tags, ...item.appliesTo])],
      url: `/catalog/${item.kind}/${item.id}/`,
    })),
  ];

  return {
    schemaVersion: "1.0.0",
    sourceDigest: digest,
    docs,
    catalog,
    search,
    provenance: {
      reviewedAt: sourceDocument.reviewed_at,
      sources: sourceDocument.sources,
      standards: sourceDocument.standards,
    },
  };
}
