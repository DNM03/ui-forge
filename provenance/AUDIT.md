# Research provenance audit

Audit date: 2026-07-16

## Conclusion

Keep the provenance records. They document research inputs, reviewed revisions, license boundaries, and excluded executable material. Removing them would not reduce any underlying similarity risk and would weaken transparency.

Upstream research influences are recorded at topic level in `extraction-map.csv`, not on individual catalog entries. Catalog `sourceRefs` retain only applicable standards and the `ui-forge-synthesis` marker. This avoids implying that an individual rule contains copied wording, code, visual assets, or a source project's selection and arrangement.

## Scope

The textual review compared 19 authored UI Forge files against 439 text-bearing files from the three local source snapshots:

- `Leonxlnx/taste-skill` at `b17742737e79`
- `Nutlope/hallmark` at `aeb42fb354ff`
- `nextlevelbuilder/ui-ux-pro-max-skill` at `fe3f65e5d020`

The UI Forge side included `SKILL.md`, Markdown references, structured catalogs, the repository README, and the research baseline. Generated site content, retained license texts, the research reference record, dependencies, test output, and binary assets were excluded from similarity scoring.

No source-repository script, installer, CLI, package command, build, server, or generated asset was executed during the review.

## Results

- Exact normalized matches of eight or more words: **0**.
- High-similarity line matches using four-word shingle containment and Jaccard thresholds: **0**.
- Exact normalized matches among distinctive labels of three to seven words: **0**.
- Direct imports, filesystem dependencies, package dependencies, or symlinks to a source checkout: **0**.
- Stored MIT license files that byte-match the reviewed repository license files: **3 of 3**.
- Recorded revision prefixes that match the local reviewed commits: **3 of 3**.

The current corpus therefore shows conceptual influence and independent expression rather than detected verbatim reuse. The topic map in `extraction-map.csv` records where research affected UI Forge's decisions.

## Controls

1. Keep `sources.yaml`, `RESEARCH_REFERENCES.md`, `extraction-map.csv`, and the retained license files.
2. Keep upstream project identifiers in the topic-level extraction map and research reference record rather than displaying them on individual catalog entries.
3. Use `ui-forge-synthesis` on every catalog entry and add standards identifiers only when they materially support that entry.
4. Add a separate `licensedFrom` record before including any copied or closely adapted code, prose, data, or asset.
5. Do not redistribute sibling bundles or visual assets until their individual licenses are reviewed.
6. Re-run textual and asset review when source material or the authored corpus changes materially.

## Limitations

This is a repository audit, not a legal opinion. Automated comparison cannot determine substantial similarity, ownership, patent rights, trademarks, contractual restrictions, or the law applicable in every jurisdiction. It also cannot prove independent creation. A qualified lawyer should review the released corpus if a dispute, commercial transaction, or jurisdiction-specific risk requires a legal conclusion.

For general context, the U.S. Copyright Office distinguishes unprotected ideas, procedures, processes, systems, and methods from protectable expression. The MIT License permits use, modification, and distribution subject to retaining its copyright and permission notice in copies or substantial portions.

- https://www.copyright.gov/circs/circ33.pdf
- https://opensource.org/license/MIT
