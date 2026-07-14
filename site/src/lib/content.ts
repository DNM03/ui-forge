import manifestData from "@/generated/manifest.json";

export const catalogKinds = ["pattern", "anti-pattern", "quality-gate", "product-guide", "stack-guide"] as const;
export type CatalogKind = (typeof catalogKinds)[number];
export type CatalogLevel = "blocking" | "recommended" | "contextual";

export interface CatalogItem {
  id: string;
  kind: CatalogKind;
  title: string;
  summary: string;
  intent: string;
  appliesTo: string[];
  tags: string[];
  checks: string[];
  warnings: string[];
  exceptions: string[];
  sourceRefs: string[];
  level: CatalogLevel;
}

export interface DocHeading {
  depth: number;
  id: string;
  text: string;
}

export interface DocPage {
  slug: string;
  title: string;
  summary: string;
  order: number;
  html: string;
  headings: DocHeading[];
  plainText: string;
}

export interface SearchRecord {
  id: string;
  type: "doc" | CatalogKind;
  title: string;
  summary: string;
  body: string;
  tags: string[];
  url: string;
}

export interface ProvenanceSource {
  id: string;
  name: string;
  url: string;
  revision?: string;
  license?: string;
  license_file?: string;
  execution?: string;
  retrieved_at?: string;
}

interface Manifest {
  schemaVersion: string;
  sourceDigest: string;
  docs: DocPage[];
  catalog: CatalogItem[];
  search: SearchRecord[];
  provenance: {
    reviewedAt: string;
    sources: ProvenanceSource[];
    standards: ProvenanceSource[];
  };
}

export const manifest = manifestData as Manifest;

export function getDoc(slug: string): DocPage | undefined {
  return manifest.docs.find((doc) => doc.slug === slug);
}

export function getCatalogItems(kind?: CatalogKind): CatalogItem[] {
  return kind ? manifest.catalog.filter((item) => item.kind === kind) : manifest.catalog;
}

export function getCatalogItem(kind: CatalogKind, id: string): CatalogItem | undefined {
  return manifest.catalog.find((item) => item.kind === kind && item.id === id);
}
