---
title: Product and stack routing
summary: Adapt interface patterns and implementation choices to the product surface and existing frontend stack.
order: 80
---

## Product surfaces

### SaaS and operations

Prioritize repeatable workflows, scan speed, stable navigation, predictable controls, and dense but organized information. Use restrained styling, aligned data, and explicit states. Avoid marketing-scale type and decorative card walls inside the tool.

### Commerce and product detail

Make the actual product inspectable in the first viewport. Keep price, configuration, availability, fulfillment, returns, and primary action clear. Do not let atmospheric imagery hide product details.

### Editorial and portfolio

Prioritize content rhythm, reading measure, authored image treatment, and distinctive but navigable composition. Expressiveness may be higher, but semantics and responsive reading order remain fixed constraints.

### Data and analytics

Start from the user question and decision, not the chart type. Preserve comparison, units, filters, data freshness, and drill-down context. Use visual density deliberately and provide table or text alternatives.

### Mobile application

Follow platform navigation and input conventions, account for safe areas and keyboards, and keep primary actions reachable. Do not transplant desktop hover behavior or wide dashboard structure.

### Campaign and brand

Use the real brand, offer, place, person, object, or product as a first-viewport signal. A hero can be expressive but must leave evidence of the next section. Avoid split card heroes and generic abstract decoration.

## Stack rules

- Reuse the repository's framework, router, state system, CSS strategy, component library, and icon library.
- Prefer framework-supported image, font, metadata, routing, and error primitives.
- Keep Server and Client Component boundaries narrow in Next.js.
- Preserve SSR and hydration safety; access browser APIs only in client effects or event handlers.
- Use semantic HTML and CSS before adding JavaScript for layout or disclosure.
- Add a dependency only when it solves a material domain problem or matches an existing project convention.

Consult `catalog.stack-guides.json` for focused implementation checks. Stack guides never authorize package installation or command execution.
