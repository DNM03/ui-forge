import path from "node:path";
import { fileURLToPath } from "node:url";

const moduleDirectory = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(moduleDirectory, "../..");
export const skillRoot = path.join(repoRoot, "skills/ui-forge");
export const referencesRoot = path.join(skillRoot, "references");
export const provenanceRoot = path.join(repoRoot, "provenance");
export const generatedRoot = path.join(repoRoot, "site/src/generated");
export const manifestPath = path.join(generatedRoot, "manifest.json");

export function resolveInside(root: string, ...segments: string[]): string {
  const resolvedRoot = path.resolve(root);
  const candidate = path.resolve(resolvedRoot, ...segments);
  const relative = path.relative(resolvedRoot, candidate);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Path escapes allowed root: ${segments.join("/")}`);
  }

  return candidate;
}
