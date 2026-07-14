import { mkdir, writeFile } from "node:fs/promises";

import { buildManifest } from "./content.js";
import { generatedRoot, manifestPath } from "./paths.js";

const manifest = await buildManifest();
await mkdir(generatedRoot, { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Generated ${manifest.docs.length} docs and ${manifest.catalog.length} catalog entries.`);
console.log(`Source digest: ${manifest.sourceDigest}`);
