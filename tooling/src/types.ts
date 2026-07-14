export const catalogKinds = [
  "pattern",
  "anti-pattern",
  "quality-gate",
  "product-guide",
  "stack-guide",
] as const;

export type CatalogKind = (typeof catalogKinds)[number];

export type CatalogLevel = "blocking" | "recommended" | "contextual";

export interface CatalogItem {
  id: string;
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

export interface CatalogFile {
  schemaVersion: "1.0.0";
  kind: CatalogKind;
  items: CatalogItem[];
}

export interface GeneratedCatalogItem extends CatalogItem {
  kind: CatalogKind;
}

export interface DocHeading {
  depth: number;
  id: string;
  text: string;
}

export interface GeneratedDoc {
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

export interface GeneratedManifest {
  schemaVersion: "1.0.0";
  sourceDigest: string;
  docs: GeneratedDoc[];
  catalog: GeneratedCatalogItem[];
  search: SearchRecord[];
  provenance: {
    reviewedAt: string;
    sources: ProvenanceSource[];
    standards: ProvenanceSource[];
  };
}
