# Contributing

## Content workflow

1. Edit only canonical files in `skills/ui-forge/`.
2. Add provenance for any externally derived rule before adding the rule.
3. Keep `SKILL.md` procedural and under 500 lines; put conditional detail in one-level `references/` files.
4. Update catalog entries with stable IDs instead of renaming IDs after publication.
5. Run `npm run validate`, `npm run test`, and `npm run build`.
6. Review generated changes in `site/src/generated/manifest.json`.

Do not hand-edit generated files. Do not add executable files to the released skill unless a deterministic task cannot be expressed safely as instructions and the script receives a separate security review.

## Rule quality

Rules must state applicability, exceptions, and a verification method. Prefer context-sensitive guidance over taste absolutes. Requirements about accessibility, correctness, user constraints, and existing product behavior outrank novelty or anti-pattern heuristics.
