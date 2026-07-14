import { readFile } from "node:fs/promises";

import { Ajv2020 } from "ajv/dist/2020.js";

import { referencesRoot, resolveInside } from "./paths.js";
import type { CatalogFile, CatalogKind, GeneratedCatalogItem } from "./types.js";

const catalogFileNames: Record<CatalogKind, string> = {
  pattern: "catalog.patterns.json",
  "anti-pattern": "catalog.anti-patterns.json",
  "quality-gate": "catalog.quality-gates.json",
  "product-guide": "catalog.product-guides.json",
  "stack-guide": "catalog.stack-guides.json",
};

export async function loadCatalogs(): Promise<{ files: string[]; items: GeneratedCatalogItem[] }> {
  const schemaPath = resolveInside(referencesRoot, "catalog.schema.json");
  const schema = JSON.parse(await readFile(schemaPath, "utf8")) as object;
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  const validate = ajv.compile<CatalogFile>(schema);
  const items: GeneratedCatalogItem[] = [];
  const files = [schemaPath];
  const ids = new Set<string>();

  for (const [kind, fileName] of Object.entries(catalogFileNames) as [CatalogKind, string][]) {
    const filePath = resolveInside(referencesRoot, fileName);
    files.push(filePath);
    const catalog = JSON.parse(await readFile(filePath, "utf8")) as CatalogFile;

    if (!validate(catalog)) {
      throw new Error(`${fileName} failed schema validation:\n${ajv.errorsText(validate.errors, { separator: "\n" })}`);
    }
    if (catalog.kind !== kind) throw new Error(`${fileName} declares kind ${catalog.kind}, expected ${kind}`);

    for (const item of catalog.items) {
      if (ids.has(item.id)) throw new Error(`Duplicate catalog id: ${item.id}`);
      ids.add(item.id);
      items.push({ ...item, kind });
    }
  }

  return { files, items };
}
