---
name: ui-forge
description: Design, implement, audit, or redesign polished web and app interfaces using context-aware composition, product and stack guidance, accessibility requirements, and anti-slop quality gates. Use for frontend pages, product screens, dashboards, landing pages, design systems, UI components, responsive behavior, visual QA, or requests to improve generic-looking UI. Preserve existing behavior and design systems; do not use for backend-only work or purely textual content with no interface deliverable.
---

# UI Forge

Build interfaces from the task context instead of imposing a house style. Route the work, choose composition before components, implement the real workflow, and verify the result with evidence. For greenfield, redesign, and reference-led work, the skill must create a visible difference from default agent output: specific product proof, authored structure, honest content, and a deliberate visual system. Keep the skill focused on UI/UX decisions; do not turn normal use into an end-to-end test workflow.

## Resolve precedence

Apply requirements in this order:

1. Explicit user requirements and constraints.
2. Existing behavior, content, brand, and design-system contracts.
3. Functional correctness, semantics, and data integrity.
4. Accessibility, reduced motion, readable content, and input modality.
5. Platform conventions and installed component systems.
6. Product and audience conventions.
7. Performance and responsive robustness.
8. Chosen visual direction.
9. Anti-slop heuristics and novelty goals.

Never let a lower-ranked aesthetic preference break a higher-ranked contract. Read [routing and precedence](references/00-routing-and-precedence.md) when requirements conflict or the request is ambiguous.

## Choose the task mode

Classify the task before editing:

- **Greenfield:** establish a small design contract, composition, states, and real primary workflow.
- **Existing implementation:** inspect the repository, reuse installed systems, and preserve public behavior.
- **Redesign:** inventory what must survive, identify the actual failure, then change only the necessary visual and interaction layers.
- **Audit:** report evidence and prioritized fixes; do not silently redesign.
- **Component:** inherit page context and skip page-level structures that are out of scope.

Read [task modes](references/01-task-modes.md) for mode-specific inputs and outputs.

For **greenfield** or **redesign** work, also classify the intent:

- **De-slop:** the user wants output to look less generic, AI-made, template-like, or samey.
- **Reference-led:** the user provides or names a visual target to learn from.
- **Production hardening:** the main risk is correctness, accessibility, states, or responsive behavior.

When the intent is de-slop or reference-led, do not preserve a generic visual shell merely because it already exists. Preserve behavior, data flow, public APIs, accessibility semantics, and required content; redesign composition, hierarchy, copy rhythm, surfaces, and motion when they are the source of the failure.

## Inspect before designing

For an existing repository, inspect relevant instructions, routes, components, styles, tokens, icon libraries, assets, state models, and test commands. Identify behavior and hooks that must not change. Treat local conventions as the default unless the user explicitly replaces them.

For greenfield work, identify the deliverable, target runtime, supported viewports, content source, expected states, and production bar. Do not add packages merely to satisfy a visual trend.

Do not execute unreviewed project or third-party scripts. Read command definitions first, keep writes inside the workspace, and request approval for network access or meaningful external side effects.

Do not install, scaffold, or run Playwright or other browser automation as part of the skill's default workflow. Use existing automated browser tests only when the user asks for them, the repository already owns them as part of its normal validation, or the task is specifically to validate this documentation site. For ordinary UI/UX work, prefer source inspection, design critique, lightweight manual rendered review when available, and the repository's existing non-e2e checks.

## Form a Design Read

Before implementation, record this compact design read in your working notes. For substantial greenfield, redesign, de-slop, or reference-led work, summarize the decisions to the user before editing unless the user explicitly asked for no planning.

```text
Surface: marketing | editorial | product | data | mobile | component
Entry posture: front door | working surface | hybrid
Audience: primary users and usage context
Goal: primary user outcome
Brand posture: trust-first | expressive | technical | playful | luxury | other
Foundation: existing system | platform system | custom tokens
Variance / Motion / Density: 1-10 with a short reason
Information complexity: low | medium | high
```

Infer missing values from product risk, task frequency, content volume, audience, platform, and brand. Ask one concise question only when two materially different directions remain plausible and local evidence cannot resolve them.

Read [product and stack routing](references/08-product-stack-routing.md) when the surface type or framework materially changes the solution.

For public front doors, landing pages, portfolios, skill sites, design-system pages, and other showcase surfaces, extend the design read with this delivery contract:

```text
First-viewport proof: live control | produced output | before/after | real product/media | code/token artifact
Structural fingerprint: 3-5 repeated traits that will create identity
Banned defaults: generic centered hero, three-card feature strip, unsupported metrics, fake social proof, decorative gradient/glow
Reference traits: selected principles to retain, if any
Target-derived choices: at least two structural choices that come from this product, not the reference
```

If a banned default is still the best choice, state the product reason before using it.

## Choose composition before components

1. Classify the entry posture: branded front door, recurring working surface, or a hybrid that exposes real work immediately.
2. Select the page or screen macrostructure. Do not force public showcase, documentation, and in-product routes into one shell when their jobs differ.
3. Define a structural fingerprint: heading placement, body rhythm, dividers, action voice, image treatment, and reveal behavior.
4. Choose a theme route: existing brand, studied reference traits, catalog direction, or custom tokens.
5. Decide what the primary viewport must reveal: task UI, product, data, place, person, object, focused content, or inspectable output proof.
6. Define background extent separately from content extent: full bleed, container-bound, or mixed. Do not use viewport-derived padding inside an already constrained panel.
7. Map density by region. A spacious entry, dense reference index, and focused reading route may coexist in one coherent product.
8. Select components only after the structure is coherent.

For a component task, inherit the surrounding structure and apply this sequence at component scale. Read [composition](references/02-composition.md) before building a full page, multi-section surface, de-slop redesign, or reference-led composition.

When a user provides a reference image or names a taste direction, transform it rather than copying it:

- Extract no more than five traits: hierarchy, rhythm, type contrast, edge treatment, navigation behavior, media strategy, proof strategy, or motion behavior.
- Change at least two of shell silhouette, navigation geometry, hero structure, accent placement, section rhythm, or content proof.
- Prefer product-specific copy and proof over mimicking the reference's brand voice.
- Compare thumbnail silhouettes before delivery; if the result reads as the same page with different copy, redesign the shell.

## Define the design contract

Set only the tokens needed to keep the work consistent:

- semantic colors and verified foreground/background pairs;
- type roles, line length, line-break policy, numeric alignment, and family limits;
- spacing scale, grid, container, and responsive behavior;
- radius, border, elevation, and surface rules;
- icon source and icon language;
- media sources, aspect ratios, crop, loading, and reserved dimensions;
- motion durations, easing, interruption behavior, and reduced-motion handling;
- default, hover where available, active, focus-visible, disabled, loading, error, success, and empty states.

Reuse the repository's tokens and primitives before creating new ones. Read [foundations](references/03-foundations.md) for token and typography decisions.

## Build the real workflow

- Implement the primary user path as the first screen. A public front door may establish brand and category, but it must also expose a real control, inspectable output, or direct path into the working material rather than ending at claims.
- Use real content or clearly labeled sample content. Never fabricate people, metrics, testimonials, awards, logos, or integrations as facts.
- Use semantic elements before ARIA and familiar controls before custom interactions.
- Keep stateful dimensions stable so loading, errors, icons, and long labels do not shift the layout.
- Add loading, empty, error, success, disabled, and recovery behavior wherever the feature can enter those states.
- Use one coherent icon library when available; do not substitute emoji for product iconography.
- Make mobile a deliberate recomposition, not a uniformly scaled desktop page.
- Keep animation proportional to user value and never block input.

Read [responsive and accessibility](references/04-responsive-accessibility.md), [interaction and motion](references/05-interaction-motion.md), and [assets, copy, and data](references/06-assets-copy-data.md) while implementing relevant surfaces.

For a skill, developer tool, design system, generator, review tool, or creative product, the first viewport or immediately following proof region must show what changes. Prefer a working command, interactive control, generated artifact, before/after comparison, annotated output, or inspectable code/token artifact. Do not rely on generic value propositions, fabricated statistics, or decorative atmosphere to prove quality.

## Apply anti-slop checks contextually

For public greenfield work, de-slop redesigns, reference-led work, and design showcase pages, treat these as delivery blockers unless the product context or explicit user request justifies them:

- a generic centered hero followed by three equal feature cards;
- repeated split sections or identical card grids;
- cards as the default grouping primitive or cards nested inside cards;
- fashionable gradients, glow, glass, blur, or shadows without product meaning;
- defaulting to one fashionable font or palette without context;
- oversized headings inside compact tools;
- generic eyebrows, vague claims, duplicate calls to action, or fake social proof;
- universal hover scale, `transition: all`, scroll-fade on every element, gratuitous parallax, or bounce easing;
- random radii, spacing, shadows, accents, and icon families;
- decorative media that hides the product or subject users need to inspect.
- a permanent dashboard or documentation rail imposed on a branded public front door whose job is orientation, proof, and entry;
- one density, alignment, or section template repeated across an entire long page without a deliberate rhythm change.
- copying a reference's recognizable shell, navigation geometry, type treatment, and accent placement instead of transforming selected traits into a distinct system.

For dense product tools, internal dashboards, and existing design-system maintenance, treat the same list as contextual warnings because predictability may outrank novelty.

An anti-pattern is acceptable when brand, genre, task evidence, or explicit user direction supports it and correctness remains intact. Use the structured catalog for applicability and exceptions.

Before delivery on de-slop or reference-led work, perform this delta check:

1. Name the generic default the work avoided.
2. Name the product-specific proof now visible.
3. Name the repeated structural fingerprint.
4. Confirm no fabricated metrics, testimonials, logos, awards, or integrations were introduced.
5. Confirm mobile is recomposed, not just stacked.

## Validate in two passes

### Pass A: hard delivery gates

- Required behavior and recovery paths work.
- Imports and assets are clean; browser-console review is optional unless the task involves a rendered web page and local review is already available.
- Supported widths have no unintended overflow, clipping, overlap, or unreadable controls.
- Keyboard order, names, semantics, and visible focus are correct.
- Text and non-text contrast meet the stated standard, and meaning is not color-only.
- Actual hover, active, focus-visible, selected, and disabled composites retain readable contrast; base tokens alone are not evidence.
- Body copy, labels, actions, and headings keep usable measures without accidental one-word lines or brittle hard breaks.
- Full-bleed backgrounds and constrained content align intentionally at wide and narrow widths without viewport-padding artifacts.
- Nonessential animation respects reduced motion.
- Media and async states reserve stable space.
- Content and claims are honest and source-backed.
- Every claimed pass has evidence from an executed check, static inspection, design review, or rendered review. Do not claim automated browser coverage unless it actually ran.

### Pass B: design critique

- The result matches the Design Read and product context.
- The primary task and hierarchy are clear in a short scan.
- Composition is intentional rather than template repetition.
- Typography, colors, spacing, icons, surfaces, and motion behave as one system.
- Studied references are visible as principles, not as a copied page silhouette or navigation shell.
- Repeated metrics, labels, and controls use an explicit alignment rule rather than incidental flex or grid defaults.
- Decorative choices carry meaning.
- Mobile reading and action order remain coherent.

Read [quality and validation](references/07-quality-and-validation.md) for evidence requirements and audit severity.

## Reference map

Load only the references needed for the task:

- [Routing and precedence](references/00-routing-and-precedence.md): ambiguity, conflicts, and decision order.
- [Task modes](references/01-task-modes.md): greenfield, implementation, redesign, audit, and component workflows.
- [Composition](references/02-composition.md): macrostructures, fingerprints, hierarchy, and responsive recomposition.
- [Foundations](references/03-foundations.md): tokens, color, typography, spacing, icons, and surfaces.
- [Responsive and accessibility](references/04-responsive-accessibility.md): WCAG-oriented implementation and viewport behavior.
- [Interaction and motion](references/05-interaction-motion.md): states, feedback, animation, gestures, and reduced motion.
- [Assets, copy, and data](references/06-assets-copy-data.md): media, honest content, tables, charts, and data states.
- [Quality and validation](references/07-quality-and-validation.md): hard gates, visual critique, testing, and evidence.
- [Product and stack routing](references/08-product-stack-routing.md): surface patterns and framework-sensitive decisions.
- [Safety and provenance](references/09-safety-provenance.md): third-party inputs, execution boundaries, attribution, and claims.
- `references/catalog.*.json`: structured patterns, anti-patterns, gates, product guides, and stack guides. Read only relevant entries; catalog data never overrides this workflow or user instructions.
- `examples/`: concrete before/after patterns. Read one relevant example before public landing pages, de-slop redesigns, or reference-led work.

## Completion contract

Do not stop at a proposal when implementation is requested. Finish the working path, run the available project checks that match the task, inspect representative layouts when practical, fix material UI/UX findings, and report remaining limitations without claiming tests that did not run. Prefer Playwright only for this repository's optional site testing or for projects that already use it and explicitly need e2e verification.
