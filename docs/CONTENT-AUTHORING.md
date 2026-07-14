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
- `sourceRefs` naming the adaptation source or standard;
- a `level` of `blocking`, `recommended`, or `contextual`.

Do not encode implementation-specific commands or executable snippets in catalog data. A source reference is provenance, not an instruction to consult or run that source at skill runtime.

## Review checklist

- Does the rule preserve explicit user and product constraints?
- Is it testable through static inspection, automated checks, or rendered evidence?
- Does it state where it does not apply?
- Does it duplicate another entry?
- Does it introduce an uncited factual or quantitative claim?
- Does the source map and notice file cover the adaptation?
