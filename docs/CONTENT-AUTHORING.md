# Content authoring

## Reference documents

Each Markdown reference begins with:

```yaml
---
title: Human-readable title
summary: One sentence used in indexes and search.
order: 10
---
```

Use level-two headings beneath the title supplied by the site. Raw HTML is forbidden. Use `https:` links for external sources and relative paths only when the target is part of the released skill.

## Catalog entries

Catalog files conform to `references/catalog.schema.json`. Every item requires:

- a stable kebab-case `id`;
- a concise `title`, `summary`, and actionable `intent`;
- `appliesTo` and `tags` for routing;
- concrete `checks` that can be verified;
- `warnings` and `exceptions` to prevent brittle universal rules;
- `sourceRefs` naming applicable standards and the `ui-forge-synthesis` marker;
- a `level` of `blocking`, `recommended`, or `contextual`.

Do not encode implementation-specific commands or executable snippets in catalog data. Catalog `sourceRefs` identify standards that materially support an entry and mark independently authored UI Forge synthesis. Record upstream research influence at topic level in `provenance/extraction-map.csv`, not on individual catalog entries.

## Review checklist

- Does the rule preserve explicit user and product constraints?
- Is it testable through static inspection, automated checks, or rendered evidence?
- Does it state where it does not apply?
- Does it duplicate another entry?
- Does it introduce an uncited factual or quantitative claim?
- Are upstream research influences recorded in the topic map without implying that an individual entry copies a source?
