# Research baseline

Research was refreshed on 2026-07-14. Official and standards-body documentation takes precedence over blog summaries and repository popularity.

## Current platform decisions

| Decision | Evidence | Result |
|---|---|---|
| Next.js baseline | [Next.js 16.2 release](https://nextjs.org/blog/next-16-2) and [installation guide](https://nextjs.org/docs/app/getting-started/installation) | Scaffolded with Next.js 16.2.10, App Router, TypeScript, Tailwind CSS 4, ESLint, and Turbopack. |
| Node.js floor | Next.js installation guide requires Node.js 20.9+ | Repository declares `>=20.9.0`; development uses Node.js 22.14.0. |
| Deployment model | [Static export guide](https://nextjs.org/docs/app/guides/static-exports) | Use `output: "export"`, `trailingSlash: true`, precompute dynamic params, and avoid server-only features. |
| Skill structure | Current Codex manual, OpenAI `skill-creator`, and [Agent Skills specification](https://agentskills.io/specification) | Required `SKILL.md`, recommended `agents/openai.yaml`, one-level references, and progressive disclosure. |
| Accessibility | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | WCAG 2.2 AA is the delivery floor; enhanced 44 by 44 CSS pixel targets are preferred for primary touch controls. |
| Content safety | [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Parse and sanitize Markdown before rendering; reject raw HTML and unsafe URL schemes; never treat content as code. |

## Source repositories

Static analysis covered the exact local revisions recorded below. No upstream script, installer, CLI, build, test, server, or package command was run.

| Source | Revision | License | Adopted strengths | Deliberately excluded |
|---|---|---|---|---|
| `Leonxlnx/taste-skill` | `b17742737e79` | MIT | Brief and audience inference, hero copy/media planning, layout-family rhythm, coherent palette and type roles, focal media, motivated motion, production-tested AI-tell guards | Shell installer, image scripts, fixed dials, named font pools, exhaustive judgment checklist, mandatory asset counts, house-style variants |
| `Nutlope/hallmark` | `aeb42fb354ff` | MIT | Generation-first routing, whole-page macrostructure, one central move, display crescendo, theme-axis variation, recent-output rotation, back-half choreography | Site scripts, remote asset instructions, rigid theme catalog, automatic AI-to-dark mapping, blanket font bans, public log/stamp ceremony, large gate checklist |
| `nextlevelbuilder/ui-ux-pro-max-skill` | `fe3f65e5d020` | MIT core; sibling assets may differ | Product/style/color/type/UX/stack taxonomy and priority lookup | Installers, downloads, persistence writes, sibling bundles, unreviewed generated copies, executable search system |

Detailed static reports remain outside this repository in `../skill-analysis/`, and the combined reasoning blueprint remains in `../UI_SKILL_SYNTHESIS.md`.

## Trust conclusions

- Repository stars are not a security control.
- Examples are evidence of an approach, not automatically valid production snippets.
- Accessibility guidance is normalized to WCAG instead of inheriting conflicting source thresholds.
- UI Forge stores adaptations in its own words and preserves the applicable MIT notices.
- The skill contains no scripts in v1. Deterministic schema and content work lives in repository tooling, outside the released skill.
