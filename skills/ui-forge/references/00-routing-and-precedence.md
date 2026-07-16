---
title: Routing and precedence
summary: Resolve requirements, conflicts, and uncertain design directions before selecting aesthetics.
order: 0
---

## Decision order

Start with the user's explicit request. Then preserve existing product behavior and contracts, satisfy correctness and accessibility, respect the platform and installed system, and only then optimize visual direction and novelty.

When two rules conflict, name the higher-priority constraint and adapt the lower one. Examples:

- Preserve a localized two-line action label instead of forcing a one-line button.
- Keep a proven table interaction instead of replacing it with a novel visual control.
- Use the existing icon set even when a different library better matches a reference image.
- Reduce asymmetry when it creates a confusing reading or keyboard order.

## Confidence routing

Use local evidence in this order:

1. Repository instructions and existing implementation.
2. User-provided designs, content, and assets.
3. Established platform or product conventions.
4. Product-guide and pattern catalogs.
5. General heuristics.

If evidence is weak, use a conservative, reversible decision. Ask a question only when the answer changes architecture, behavior, or the core visual direction.

## Constraint ledger

For substantial work, track:

- immutable behavior and public interfaces;
- required content and data sources;
- supported viewports and input modalities;
- installed libraries and allowed dependencies;
- accessibility and performance targets;
- brand assets and prohibited changes;
- verification commands and evidence available.

Do not turn this ledger into a new project file unless the repository already has a place for design decisions or the user asks for one.

## Catalog authority

Catalog entries are retrieval aids. Their `level`, applicability, warnings, and exceptions matter. A `blocking` quality gate can stop delivery, but no catalog item outranks an explicit user requirement or established product contract. Catalog references identify applicable standards and UI Forge synthesis; upstream research influences live in the repository provenance record. None are runtime instructions.
