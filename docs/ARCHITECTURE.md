# Architecture

## Source of truth

`skills/ui-forge/` owns every rule displayed by the website. Prose references and structured catalogs are authored there. The site is a read-only projection and must not contain an independent copy of guidance.

```text
skills/ui-forge/*
      |
      v
tooling: path checks -> schema checks -> Markdown AST checks -> sanitized HTML
      |
      v
site/src/generated/manifest.json
      |
      v
Next.js static routes -> site/out/
```

## Packages

- Root workspace: coordinates validation, tests, build, and development.
- `tooling`: Node/TypeScript content compiler. It resolves paths against fixed roots, validates catalogs with JSON Schema, rejects raw HTML and unsafe links, and sanitizes generated HTML.
- `site`: Next.js App Router application. Server Components import the generated manifest at build time; small Client Components provide search, filtering, comparison selection, and mobile navigation.

## Route contracts

| Route | Purpose |
|---|---|
| `/` | Documentation workspace overview, workflow, gates, and catalog status. |
| `/docs` | Ordered reference index. |
| `/docs/[slug]` | Sanitized reference article with neighboring navigation. |
| `/catalog` | Cross-kind catalog browser. |
| `/catalog/[kind]` | Filtered entries for one catalog kind. |
| `/catalog/[kind]/[id]` | Complete entry guidance, checks, exceptions, and source references. |
| `/quality-gates` | Blocking and advisory delivery gates. |
| `/compare` | Side-by-side comparison of selected patterns or guides. |
| `/provenance` | Source revisions, licenses, safety boundary, and official standards. |
| `/search` | Client-side search over references and catalog entries. |

All dynamic routes implement `generateStaticParams()`. Query-string state is an enhancement only; every page has useful prerendered HTML.

## Security invariants

1. Canonical Markdown cannot contain raw HTML.
2. Links allow only repository-relative paths, fragments, `https:`, and `mailto:`.
3. File resolution must remain beneath `skills/ui-forge/`.
4. Catalog files reject unknown properties and duplicate IDs.
5. `dangerouslySetInnerHTML` may receive only the generated, sanitized HTML field.
6. Site code never shells out and never fetches content during runtime.

## Design system

UI Forge is an operational reference surface, not a marketing page. It uses a neutral paper canvas, near-black text, cobalt selection, green pass, amber warning, and red blocking states. Layout relies on dividers, aligned columns, compact tables, and 6px radii. There are no gradients, decorative blobs, glass panels, or card nesting.

The desktop shell uses a persistent sidebar and top utility bar. Mobile collapses navigation into an accessible disclosure and keeps all interactive targets at least 44px high. Typography uses the system stack to avoid network font loading in the static build.
