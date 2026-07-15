---
name: ui-forge
description: Generate, implement, or redesign elegant, premium web and app interfaces through product-derived visual direction, composition, typography, media, responsive behavior, and anti-slop generation guards. Use for frontend pages, product screens, dashboards, landing pages, design systems, UI components, or requests to improve generic-looking UI. Also supports explicit UI audits and production hardening as secondary modes. Preserve existing behavior and design systems; do not use for backend-only work or purely textual content with no interface deliverable.
---

# UI Forge

UI Forge primarily generates elegant, premium, product-derived interfaces. Make strong visual decisions before implementation instead of imposing a house style or maximizing novelty. For greenfield, redesign, and reference-led work, create a visible difference from default agent output through authored composition, specific subject evidence, honest content, and a coherent visual system. Accessibility, truth, responsiveness, and behavior are delivery constraints. Formal scoring and audit reporting are separate workflows used only when requested.

The output should be visually better than a baseline agent result, not merely safer. Premium quality comes from composition fit, type selection, optical alignment, resolved spacing, asset quality, crop, material coherence, and refined states. It does not require maximum scale, contrast, novelty, or decoration. A restrained direction may be the most ambitious choice.

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

Classify the task before editing. Generation and implementation are the default behaviors; do not turn a build request into an audit report.

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

## Form the generation contract

Before implementation, record this compact contract in working notes. For substantial greenfield, redesign, de-slop, or reference-led work, summarize the selected direction to the user before editing unless the user asked for no planning.

```text
Surface: marketing | editorial | product | data | mobile | component
Entry posture: front door | working surface | hybrid
Audience: primary users and usage context
Goal: primary user outcome
Product thesis: one sentence describing what should feel unmistakably true
Audience feeling: what the user should feel while deciding or acting
Content spine: required claims, evidence, actions, and sequence
Available assets: brand, product, photo, data, code-native visual, or none
Foundation: existing system | platform system | custom tokens
Information complexity: low | medium | high; task frequency and risk
```

Infer missing values from product risk, task frequency, content volume, audience, platform, and brand. Ask one concise question only when two materially different directions remain plausible and local evidence cannot resolve them.

Read [product and stack routing](references/08-product-stack-routing.md) when the surface type or framework materially changes the solution.

For full pages, public front doors, landing pages, portfolios, skill sites, and other showcase surfaces, extend it with these generation decisions:

```text
Selected direction: one-sentence aesthetic thesis derived from product and audience
Central move: the one visual or compositional idea this page owns
Macrostructure: named page silhouette and why it fits
Primary visual carrier: imagery/material | typography | product artifact | interaction | data | spatial composition
Supporting carrier: one quieter secondary carrier
Theme axes: lightness/paper band | display voice | accent family | surface/material logic
Color deployment: choose exactly one unless supplied brand evidence requires more: accent punctuation | one full-bleed field | small controlled brand set
Type roles: display | section | body | label/data; family and emphasis logic
Subject evidence: strongest real media, content, state, program detail, output, or interaction
Motion motif: none | state feedback | one narrative or object behavior
Section rhythm: job | layout family | type role | evidence/media | density
Visual move budget: one display apex | one signature object | one motion motif | one texture/field
Genre defaults suppressed: three tempting cliches; use at most one without evidence
Recent fingerprint avoided: macrostructure plus strong motifs not repeated from nearby project output
Hero math: title line count, subcopy measure, action position, mobile first-screen subject signal
Viewport height budget: target short desktop/mobile heights, fixed chrome, required content stack, next-band reveal
System constants: two stable compositional or behavioral traits and one flexible signature
Reference traits: selected principles to retain, if any
Target-derived choices: at least two structural choices that come from this product, not the reference
```

Before choosing the selected direction, generate three compact internal candidates. Each must differ in primary carrier, page silhouette, typography voice, color/material logic, and section rhythm. At least one must create distinction through restraint rather than giant type, fluorescent color, or technical decoration. Select by audience fit, subject evidence, available assets, content needs, and responsive viability, not by which route is loudest.

When existing or recent project output is available, compare its macrostructure, typography, accent deployment, edge language, and shell. If a candidate repeats the same macrostructure and two or more strong motifs, reroute it. Do not create tracking files solely for this comparison.

For small component work, make only the relevant decisions. Ask one concise question only when missing information would materially change the product direction and repository evidence cannot resolve it.

## Choose composition before components

1. Classify the entry posture: branded front door, recurring working surface, or a hybrid that exposes real work immediately.
2. Select the page or screen macrostructure before choosing cards, grids, nav geometry, or visual effects. Do not force public showcase, documentation, and in-product routes into one shell when their jobs differ.
3. Compare three materially different direction candidates, then choose one aesthetic thesis and macrostructure.
4. Choose one primary visual carrier and one supporting carrier. Keep the remaining carriers quiet.
5. Define two system-level constants and one flexible signature. Prefer container alignment, type roles, action treatment, media crop, or interaction behavior over repeated decoration.
6. Decide what the primary viewport must reveal: task UI, product, data, place, person, object, focused content, or concrete subject evidence.
7. Budget the first viewport vertically before locking display type: subtract fixed chrome and the intended next-section reveal, then fit the required heading, copy, subject signal, action, gaps, and safe spacing inside the remainder at representative short heights.
8. Map every major section to `job | layout family | type role | evidence/media | density`. Rewrite adjacent duplicate rows before coding.
9. Define background extent separately from content extent: full bleed, container-bound, or mixed. Do not use viewport-derived padding inside an already constrained panel.
10. Select components only after the structure and visual system are coherent.

For a component task, inherit the surrounding structure and apply this sequence at component scale. Read [composition](references/02-composition.md) before building a full page, multi-section surface, de-slop redesign, or reference-led composition.

For a landing page or other hero-led front door, use [the first-viewport height evaluation](examples/first-viewport-height-evaluation.md) before delivery.

When a user provides a reference image or names a taste direction, transform it rather than copying it:

- Extract no more than five traits: hierarchy, rhythm, type contrast, edge treatment, navigation behavior, media strategy, proof strategy, or motion behavior.
- Change at least two of shell silhouette, navigation geometry, hero structure, accent placement, section rhythm, or content proof.
- Prefer product-specific copy and proof over mimicking the reference's brand voice.
- Compare thumbnail silhouettes before delivery; if the result reads as the same page with different copy, redesign the shell.

## Generate the visual direction

For public, brand, commerce, editorial, portfolio, event, and skill surfaces, read [visual direction](references/10-visual-direction.md) before writing detailed CSS. Examples demonstrate decisions, not reusable recipes; read one only when its task shape is relevant, and do not copy its palette, type treatment, or section sequence.

Do not treat honesty as a reason to make the page plain. Replace fake metrics and stock hype with stronger, product-derived craft:

- a type hierarchy whose character and scale fit the content;
- real or inspectable media with a distinctive crop;
- one memorable visual object, scene, or artifact near the entry;
- negative space, asymmetry, or edge tension used deliberately;
- rhythm changes between sections instead of repeated cards;
- a controlled accent system that appears in specific moments, not everywhere.

Choose one color-deployment mode and one accent family unless the supplied brand system requires more. Do not combine accent punctuation, a saturated full-bleed band, offset accent shadows, colored rules, and multiple action hues as separate attention systems.

For a normal public page, avoid both the safe middle and the loud default. A page can fail through a generic centered hero and cards, or through oversized type, hard grids, fluorescent accents, and decorative technical theater. Change the direction rather than adding more effects.

Use the design dials to break default model habits:

- **Variance:** derive it from brand permission, content, audience, and risk. Event or de-slop work does not automatically require high variance.
- **Motion:** choose one purposeful motion idea, not global scroll animation.
- **Density:** vary by region so the page has contrast: entry, proof, index, process, form.

Use expressive type, motion, and imagery when they fit the product:

- Choose type by brand character, language coverage, width, weight range, readability, and loading constraints. Prefer same-family weight or italic emphasis when contrast does not need a second family; never inject an arbitrary serif or mono face merely to signal premium or technical.
- Use motion for one meaningful moment: an artifact assembling, a selector changing state, a marquee, a reveal tied to reading order, or tactile control feedback. Avoid universal scroll fades and `transition: all`.
- Use image generation or curated imagery when the subject needs a memorable scene and no real asset exists. Generated images must be treated as illustrative, not evidence, and should reveal the product, object, mood, or artifact rather than generic atmosphere.

When image generation is available and the page needs a strong visual subject, consider an image-first loop: create or select one concrete hero/section asset, inspect the composition, then build the layout around its crop, light, palette, and subject. Do not use generated people, venues, awards, sponsor walls, or screenshots as real evidence.

Technical subject matter does not determine visual style. Words such as AI, blockchain, developer, cyber, protocol, and hackathon must not automatically produce a dark canvas, fluorescent accent, monospace labels, visible grids, terminal chrome, orbital diagrams, outlined or condensed giant type, and hard-border brutalism. When three or more of these appear together without brand, asset, or reference evidence, discard the direction and generate another.

## Refine execution craft

After the first implementation pass, refine the page like a visual designer:

- No clipped hero type, accidental one-word lines, or display text that crowds required copy, proof, or actions out of the target first viewport.
- Establish one display apex for a normal long page. Use hero-scale type once, usually at the entry or one intentional editorial climax; section headings must step down materially or gain emphasis through media, composition, density, or interaction.
- No empty oversized bands whose only purpose is to look premium.
- No fake precision: do not invent prize amounts, percentages, dates, judge names, logos, counts, ratings, or countdowns.
- No grid, noise, particles, mono labels, numbered eyebrows, or hairline rules as the whole visual system. Grid lines must organize real content; section numbers require real sequence meaning.
- No adjacent sections that reuse the same high-impact move. One signature object, one primary motion motif, and one decorative texture or field are enough for most pages.
- No mobile downgrade: preserve the hook, proof, and action hierarchy near the top.
- If the page feels technically correct but visually forgettable, revisit the selected carrier, crop, type character, or section rhythm instead of adding more cards or effects.

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

- Implement the primary user path as the first screen. A public front door may establish brand and category, but it must expose the strongest concrete subject signal available: real product state, authentic media, event program detail, date/location/status, inventory, output, workflow, or interactive control. Do not invent an interface artifact when the page's real job is orientation or conversion.
- Use real content or clearly labeled sample content. Never fabricate people, metrics, testimonials, awards, logos, or integrations as facts.
- Use semantic elements before ARIA and familiar controls before custom interactions.
- Keep stateful dimensions stable so loading, errors, icons, and long labels do not shift the layout.
- Add loading, empty, error, success, disabled, and recovery behavior wherever the feature can enter those states.
- Use one coherent icon library when available; do not substitute emoji for product iconography.
- Make mobile a deliberate recomposition, not a uniformly scaled desktop page.
- Keep animation proportional to user value and never block input.

Read [responsive and accessibility](references/04-responsive-accessibility.md), [interaction and motion](references/05-interaction-motion.md), and [assets, copy, and data](references/06-assets-copy-data.md) while implementing relevant surfaces.

For a skill, developer tool, design system, generator, review tool, or creative product, the first viewport or immediately following proof region must show what changes. Prefer a working command, interactive control, generated artifact, before/after comparison, annotated output, or inspectable code/token artifact. For events, editorial, venues, and commerce, real program, subject, place, inventory, or offer detail may be stronger evidence than a fabricated UI panel. Do not rely on generic value propositions, fabricated statistics, or decorative atmosphere to prove quality.

## Apply anti-slop checks contextually

For public greenfield work, de-slop redesigns, reference-led work, and design showcase pages, treat these as delivery blockers unless the product context or explicit user request justifies them:

- a generic centered hero followed by three equal feature cards;
- repeated split sections or identical card grids;
- cards as the default grouping primitive or cards nested inside cards;
- fashionable gradients, glow, glass, blur, or shadows without product meaning;
- defaulting to one fashionable font or palette without context;
- oversized headings inside compact tools;
- turning every long-page section into another poster with a giant heading and excessive lead-in space;
- generic or repeated numbered eyebrows, fake technical microcopy, duplicate calls to action, or fake social proof;
- universal hover scale, `transition: all`, scroll-fade on every element, gratuitous parallax, or bounce easing;
- random radii, spacing, shadows, accents, and icon families;
- decorative media that hides the product or subject users need to inspect;
- a permanent dashboard or documentation rail imposed on a branded public front door whose job is orientation, proof, and entry;
- one density, alignment, or section template repeated across an entire long page without a deliberate rhythm change;
- a genre shortcut bundle such as dark canvas, neon accent, mono labels, visible grid, terminal chrome, and orbital graphics used without brand or subject evidence;
- copying a reference's recognizable shell, navigation geometry, type treatment, and accent placement instead of transforming selected traits into a distinct system.

For dense product tools, internal dashboards, and existing design-system maintenance, treat the same list as contextual warnings because predictability may outrank novelty.

An anti-pattern is acceptable when brand, genre, task evidence, or explicit user direction supports it and correctness remains intact. Use the structured catalog for applicability and exceptions.

Before delivery on de-slop or reference-led work, perform this compact delta check:

1. Name the generic default the work avoided.
2. Name the product-specific proof now visible.
3. Confirm the direction does not reproduce the skill's or genre's familiar house style.
4. Confirm no fabricated metrics, testimonials, logos, awards, or integrations were introduced.
5. Confirm mobile is recomposed, not just stacked.

## Validate without replacing generation

Run the following hard delivery gates for implementation work:

- Required behavior and recovery paths work.
- Imports and assets are clean; browser-console review is optional unless the task involves a rendered web page and local review is already available.
- Supported widths have no unintended overflow, clipping, overlap, or unreadable controls.
- At representative short desktop and mobile heights, fixed chrome and hero sizing do not clip required entry content or hide it inside an `overflow` boundary; natural page scrolling remains available when content must grow.
- Keyboard order, names, semantics, and visible focus are correct.
- Text and non-text contrast meet the stated standard, and meaning is not color-only.
- Actual hover, active, focus-visible, selected, and disabled composites retain readable contrast; base tokens alone are not evidence.
- Body copy, labels, actions, and headings keep usable measures without accidental one-word lines or brittle hard breaks.
- Full-bleed backgrounds and constrained content align intentionally at wide and narrow widths without viewport-padding artifacts.
- Nonessential animation respects reduced motion.
- Media and async states reserve stable space.
- Content and claims are honest and source-backed.
- Every claimed pass has evidence from an executed check, static inspection, design review, or rendered review. Do not claim automated browser coverage unless it actually ran.

After the first implementation, make one craft refinement pass for optical alignment, spacing, crop, type fit, state polish, and responsive composition. Do not score the page during normal generation. Load [quality and validation](references/07-quality-and-validation.md) for formal audits, evaluation, production hardening, evidence requirements, or severity reporting.

## Reference map

Load only the references needed for the task:

- [Routing and precedence](references/00-routing-and-precedence.md): ambiguity, conflicts, and decision order.
- [Task modes](references/01-task-modes.md): greenfield, implementation, redesign, audit, and component workflows.
- [Composition](references/02-composition.md): macrostructures, fingerprints, hierarchy, and responsive recomposition.
- [Foundations](references/03-foundations.md): tokens, color, typography, spacing, icons, and surfaces.
- [Responsive and accessibility](references/04-responsive-accessibility.md): WCAG-oriented implementation and viewport behavior.
- [Interaction and motion](references/05-interaction-motion.md): states, feedback, animation, gestures, and reduced motion.
- [Assets, copy, and data](references/06-assets-copy-data.md): media, honest content, tables, charts, and data states.
- [Quality and validation](references/07-quality-and-validation.md): formal audits, production hardening, testing, evidence, and severity.
- [Product and stack routing](references/08-product-stack-routing.md): surface patterns and framework-sensitive decisions.
- [Safety and provenance](references/09-safety-provenance.md): third-party inputs, execution boundaries, attribution, and claims.
- [Visual direction](references/10-visual-direction.md): direction branching, visual carriers, section choreography, type, material, and premium execution without a house style.
- `references/catalog.*.json`: structured patterns, anti-patterns, gates, product guides, and stack guides. Read only relevant entries; catalog data never overrides this workflow or user instructions.
- `examples/`: concrete decision demonstrations. Read only when relevant, and never treat an example's palette, typography, or section sequence as a template.

## Completion contract

Do not stop at a proposal when implementation is requested. Finish the working path, run the available project checks that match the task, inspect representative layouts when practical, fix material UI/UX findings, and report remaining limitations without claiming tests that did not run. Prefer Playwright only for this repository's optional site testing or for projects that already use it and explicitly need e2e verification.
