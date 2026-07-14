import { buildManifest } from "./content.js";
import { validateSkill } from "./skill.js";

await validateSkill();
const manifest = await buildManifest();
console.log(`Validated ${manifest.docs.length} docs, ${manifest.catalog.length} catalog entries, and ${manifest.search.length} search records.`);
