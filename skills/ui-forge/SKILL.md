---
name: ui-forge
description: Generate, implement, or redesign distinctive, premium web and app interfaces through product-derived art direction, visual assets, composition, typography, motion, responsive behavior, and anti-slop generation decisions. Use for frontend pages, product screens, dashboards, landing pages, design systems, UI components, or requests to improve generic-looking UI. UI audits and production hardening are supported as secondary modes. Preserve existing behavior and design systems; do not use for backend-only work or purely textual content with no interface deliverable.
---

# UI Forge

UI Forge is a UI generation skill first. Its main job is to create and implement visually authored, product-specific interfaces that feel premium and avoid default agent output. Judgment is a supporting delivery layer, not the creative center.

For normal greenfield, redesign, de-slop, and reference-led work, spend the majority of design reasoning on art direction, assets, composition, typography, section choreography, and motion. Implement the complete experience, make one craft refinement pass, then run a compact delivery floor. Use formal scoring, severity, evidence reports, and exhaustive audits only when the user asks for audit, evaluation, review, or production hardening.

Premium quality comes from a fitting visual idea, excellent subject media, deliberate crop, memorable but controlled typography, optical alignment, spacing resolution, material coherence, and refined behavior. It does not require one palette, maximum scale, a floating pill header, card-heavy layouts, or extra judgment UI.

For expressive public surfaces, optimize the first ten seconds: the viewer should recognize the category, find one magnetic subject or visual idea, understand the offer, and notice that the page is alive. Anti-slop does not mean erasing useful genre signals. It means choosing and transforming them until they feel specific to this product rather than interchangeable with another generated page.

## Resolve precedence

Apply requirements in this order:

1. Explicit user requirements and constraints.
2. Existing behavior, content, brand, and design-system contracts.
3. Functional correctness, semantics, and data integrity.
4. Accessibility, readable content, reduced motion, and input modality.
5. Product, audience, platform, and responsive needs.
6. Chosen visual direction and craft system.
7. Anti-slop heuristics and novelty goals.

Never let a lower-ranked aesthetic preference break a higher-ranked contract. Read [routing and precedence](references/00-routing-and-precedence.md) when requirements conflict.

## Choose the task mode

- **Greenfield:** generate the art direction, build the real primary experience, and establish a small coherent system.
- **Existing implementation:** inspect the repository, preserve public behavior, and improve the requested visual or interaction layer.
- **Redesign:** inventory what must survive, identify the visual failure, then replace the composition, hierarchy, media, and motion that cause it.
- **Audit:** report evidence and prioritized fixes; do not silently redesign.
- **Component:** inherit the surrounding product and skip irrelevant page-level ceremony.

Generation and implementation are the default. Do not turn a build request into an audit report. Read [task modes](references/01-task-modes.md) for mode-specific detail.

## Inspect the inputs

For an existing repository, inspect relevant instructions, routes, components, styles, tokens, icon libraries, assets, state models, and normal test commands. Treat the local system as the foundation unless the user replaces it.

For greenfield work, resolve the deliverable, runtime, target viewports, content status, available assets, expected interactions, and production bar. Do not add packages merely to imitate a trend.

Do not execute unreviewed project or third-party scripts. Read command definitions first, keep writes inside the workspace, and request approval for network access or meaningful external side effects.

## Form the creative brief

Before detailed implementation, record a compact internal brief:

```text
Surface and entry posture: marketing | editorial | product | data | mobile | component;
                           front door | working surface | hybrid
Audience and outcome: who is deciding or acting, and what they must accomplish
Product thesis: what should feel unmistakably true
Audience feeling: appetite | confidence | calm | urgency | focus | delight | other
Content spine: identity, offer, evidence, actions, and sequence
Content status: source-backed | clearly labeled concept/sample | mixed with labels
Available assets: brand | product | photo | video | data | interface | code-native | none
Foundation: existing system | platform system | minimal custom system
Constraints: runtime, behavior, accessibility, viewports, performance, and delivery limits
```

For full public pages, extend it with generation decisions:

```text
Candidate directions: three materially different routes
Selected direction: one-sentence art-direction thesis
Category vocabulary: two to four recognizable cues that belong to this audience and subject
Primary / supporting carrier: one dominant visual carrier and one quieter carrier
Hero strategy: immersive media | editorial type | artifact tableau | product stage |
               kinetic poster | product-specific custom composition
Central move: the one visual or compositional idea the page owns
First-ten-second hook: what creates immediate recognition, desire, or curiosity
Macrostructure: page silhouette and reading route
Media plan: source, crop, focal subject, aspect ratios, mobile treatment
Typography: display, section, body, label/data roles and intended title lines
Color and material: base field, accent deployment, surface and edge logic
Navigation posture: integrated, overlay, edge bar, split, compact floating, or other
Motion system: one subject-specific signature plus zero to two supporting layers
Section rhythm: job | layout family | type role | media/evidence | density
Spacing: page gutter | section gap | panel inset | stack gap | control gap
First viewport: identity, subject signal, action, boundary intent, and short-height behavior
Commerce spine: product, price, variant or flavor, availability, and purchase or subscription path
Suppressed defaults: three tempting category cliches not supported by evidence
Disclosure placement: quiet footer, metadata, or local sample label; never the hero narrative
```

Ask one concise question only when missing information would materially change the direction and repository evidence cannot resolve it.

## Branch before selecting

For substantial public, brand, event, commerce, portfolio, editorial, skill, or de-slop work, form three compact internal candidates before coding. Each candidate must differ in:

- primary visual carrier;
- page silhouette and hero strategy;
- typography voice;
- color and material logic;
- navigation posture;
- section rhythm and motion signature.

At least one route should be media-led when the subject is visual. At least one should create distinction through restraint rather than giant type or effects. Reject candidates that are color swaps of the same shell.

Select the route with the strongest category resonance, visual magnetism, product fit, emotional fit, asset potential, compositional identity, motion opportunity, responsive viability, and implementation fit. Reject a candidate that is elegant but could advertise an unrelated product after changing only the copy. Reject a candidate whose first viewport has no dominant subject, artifact, or compositional event. Do not choose the safest, most easily audited, or loudest route merely for those reasons.

Use familiar category vocabulary when it helps the audience recognize the subject, but make at least one cue product-specific through the asset, composition, interaction, or motion. A coherent technical world can legitimately use dark surfaces, luminous routing, grids, or orbital movement; a premium studio can legitimately use editorial type and tactile media. The failure is an untransformed bundle, not the presence of a familiar cue.

Read [visual direction](references/10-visual-direction.md) before detailed CSS for public or showcase surfaces. Examples demonstrate decision-making only; never reuse an example's palette, typography, hero, or section sequence as a recipe.
For a worked example of selecting visual impact without fabricating proof, read [visual impact selection](examples/visual-impact-selection.md).

## Secure the visual carrier

Public websites and branded front doors need a real visual carrier. Choose it before polishing layout.

- Use supplied or authentic imagery when it exists.
- When the subject is visual and no suitable asset exists, use image search or image generation when available, then design around the resulting crop, light, palette, and negative space.
- Generated media is illustrative, not evidence. Label it only where it could reasonably be mistaken for a real person, place, event, product, or result.
- For product, object, venue, food, property, portfolio, and person-focused pages, reveal the actual subject clearly. Do not replace it with a gradient, blob, tiny icon-like SVG, generic dashboard, or decorative exploded parts.
- Generate or select hero media with crop-safe space around must-inspect subjects. Test the actual `cover` crop at wide, short, and narrow aspect ratios; adjust the asset, focal position, or composition before allowing products, faces, text, or essential silhouettes to be cut.
- For commerce, food, apparel, and other product-selling pages, use art direction to strengthen the merchandise rather than displace it. Keep concrete product names, prices, variants or flavor details, availability, and a purchase or subscription path visible early.
- In a split hero, let the subject occupy a meaningful share of its media region. Avoid a small object floating inside multiple nested frames and large unused panel space.
- For abstract or technical products, visualize the mechanism, flow, transformation, or output rather than using an unrelated atmospheric render. The carrier may be illustrative, but it must explain the product world at a glance.
- Use code-native visuals only when they credibly communicate the real subject or interaction. A technically polished placeholder is not automatically premium media.

If the required media cannot be produced, keep the composition media-ready, use an honest placeholder, and state the limitation. Do not claim premium product inspection without a credible subject asset.

Read [assets, copy, and data](references/06-assets-copy-data.md) when the interface depends on imagery, generated media, claims, or sample content.

## Compose the first viewport

Choose the entry composition before components:

1. Make the brand, product, person, place, object, or literal offer an immediate first-viewport signal.
2. Choose a hero strategy that fits the available carrier. Prefer immersive full-bleed media, a large unframed product stage, an editorial type composition interrupted by meaningful media, or a product-specific artifact tableau over a generic split card.
3. Treat navigation as part of the page silhouette. Do not default to a floating pill. If a floating header is selected, make its geometry and behavior integral to the direction and keep its mobile form compact.
4. Plan headline copy, subject scale, action, and vertical space together. Protect names and model tokens from awkward breaks.
5. Budget the complete first screen, including the header. For a full-viewport entry, put an integrated header and hero in one `min-height: 100svh` wrapper with `auto minmax(0, 1fr)` rows, or subtract the measured external header height from the hero. Never add an external header above a separate `100svh` hero.
6. At short desktop and mobile heights, keep the identity, subject hook, and primary action reachable without clipping. Leave a meaningful cue that the page continues.
7. On mobile, recompose the hook rather than shrinking the desktop layout or expanding the header into a large multi-row card.
8. Give the hero one moment of controlled tension: a decisive crop, overlap, depth shift, lighting change, typographic interruption, live state, or product-specific motion. Do not fill the viewport with evenly weighted panels.

Use [composition](references/02-composition.md) and [first-viewport height evaluation](examples/first-viewport-height-evaluation.md) for full hero-led pages.

## Choreograph the whole page

Map major regions as `job | layout family | type role | media/evidence | density` before building them. Rewrite adjacent duplicates.

- Establish one display apex for a normal long page.
- Use one central visual object or subject and one supporting carrier.
- Change rhythm through media ratio, alignment, density, crop, surface extent, or interaction rather than by restyling the same cards.
- Plan at least one meaningful scene change after the hero: an inversion, immersive media band, working product state, spatial sequence, or focused evidence moment. It should advance the story, not merely change the background color.
- Let the back half have its own authored progression. Do not append the same features, metrics, testimonials, CTA, and footer sequence to every page.
- Use full-bleed bands, open layouts, galleries, ledgers, compact lists, product shelves, or focused forms where the content calls for them. Cards are for bounded entities, not the default section wrapper.
- Define two system-level constants and one flexible signature. Coherence should come from alignment, type roles, actions, crop, and behavior before repeated decoration.
- Define page gutter, section gap, panel inset, stack gap, and control gap separately. Visible surfaces need inset; peers need explicit gaps unless an intentional seam is the design.
- Balance split-region heights, bound sticky elements to their section, or recompose sequentially. Do not create accidental dead columns.
- Remove large empty bands that create neither focus, anticipation, nor a deliberate transition. Premium pacing still needs visible compositional intent.

## Build typography, color, and material as one system

- Choose type for brand character, width, weight range, readability, and loading constraints. Use a second family only when the content needs another voice.
- Make one memorable typographic move, not giant type everywhere. Size display text from copy length and available height, not viewport width alone.
- Keep product names and meaningful phrases intact. Avoid accidental one-word lines, brittle hard breaks, and compressed measures.
- Preserve literal spaces, punctuation, and accessible reading order when splitting or animating display copy. Read the rendered phrase at every supported breakpoint; never ship merged words or altered brand and product names.
- Choose one coherent color-deployment mode: accent punctuation, one full-bleed field, or a small supplied brand set.
- Use contrast bands, borders, radii, shadows, blur, glow, grain, and grids only when they belong to the selected material logic.
- Do not infer a dark neon technical style from technical words or a cream editorial style from premium, fashion, craft, or luxury words.

Read [foundations](references/03-foundations.md) for detailed type, color, spacing, shape, and icon decisions.

## Give the page a motion system

For expressive public or launch surfaces, implement one visible motion idea tied to the subject or composition: a product reveal, image transition, artifact assembly, typographic shift, marquee, selector, parallax crop, timeline progression, or other product-specific behavior. It should be noticeable above the fold or through the first natural interaction.

Support the signature with at most two quieter layers when useful:

- an ambient layer such as restrained light, texture, topology, or depth movement;
- a responsive layer such as hover, pointer, scroll, or selection feedback that reveals structure or state.

The layers should share timing and spatial logic. The signature must remain perceptible in normal use, add character or understanding, and yield to user input. Do not substitute a barely visible ambient sweep for the primary idea. Complete tactile hover, pressed, selected, and focus feedback where controls exist.

Avoid universal fade-up reveals, `transition: all`, cursor followers, endless particles, and repeated hover scaling. Respect reduced motion while preserving hierarchy and state feedback. Read [interaction and motion](references/05-interaction-motion.md).

## Implement the complete experience

- Build the real primary path, not a marketing shell around inert controls.
- Use semantic elements before ARIA and familiar controls before custom widgets.
- Add the reachable loading, empty, error, success, disabled, and recovery states the feature genuinely needs.
- Keep stateful dimensions stable and preserve mobile hierarchy.
- Use one coherent icon system when available; do not use emoji as product controls.
- For commerce and subscription surfaces, keep the evaluation and buying path concrete: show what is sold, the price or plan, meaningful options, and the primary action early. Atmosphere may lead the hero, but it must not postpone merchandising beyond the first natural scroll.
- Use real content or disclose the overall fictional surface once in a quiet footer note, metadata region, or adjacent sample label. Do not put `concept`, `demo`, `fictional`, or design-process language in the hero eyebrow, main heading, primary action, or section narrative merely to satisfy disclosure. Do not invent evidence such as testimonials, customer names, awards, logos, ratings, or usage metrics.
- Keep user-facing copy inside the product world. Never expose design reasoning, prompt language, or sentences about the landing page, hero, layout, feature grid, generated result, or why the interface was composed a certain way.
- A concept label should support honesty without turning the page into a compliance report. Desire, clarity, and brand voice still lead the experience.

Read [responsive and accessibility](references/04-responsive-accessibility.md) while implementing relevant surfaces.

## Make one craft refinement pass

After the first implementation, inspect it as a visual designer:

- Is the primary subject large, clear, well cropped, and worthy of the first viewport?
- Without reading the logo, does the first viewport still feel unmistakably related to the product category and desired audience feeling?
- Is there one visual magnet that survives a grayscale thumbnail and a two-second glance?
- Does the thumbnail silhouette look authored rather than like a familiar template?
- Is there one clear display apex and a controlled hierarchy afterward?
- Are optical alignment, line breaks, spacing, panel inset, sibling gaps, and media crops resolved?
- Does the combined header-plus-hero end at an intentional boundary, with either full coverage or a designed next-section reveal and no blank trailing strip?
- At a short laptop height, are must-inspect subjects fully visible inside the actual media crop rather than cut by `object-fit: cover`?
- Does every split or animated headline preserve exact words, spaces, punctuation, and reading order?
- On a commerce page, can a viewer identify a product, price or plan, meaningful option, and purchase path without searching through brand narrative?
- Does each region advance the visual rhythm instead of resetting into another hero or card grid?
- Is the motion signature visible and specific to this page?
- Does a representative scroll expose a meaningful scene change rather than repeating the same panel treatment?
- Does sticky chrome clear every section heading and anchor at rest and during smooth scrolling?
- Has all visible design rationale, prompt language, and unnecessary concept labeling been removed from the product narrative?
- Does mobile preserve the visual hook, brand, subject, and action without oversized chrome?
- If the page is correct but visually forgettable, change the carrier, asset, crop, typography voice, or macrostructure. Do not add more badges, cards, disclaimers, or effects.

Use the anti-pattern catalog contextually. It is a rerouting aid, not the main design process.

## Run the compact delivery floor

For normal generation, verify only the blocking delivery conditions:

- The primary workflow and reachable controls work truthfully.
- Supported widths have no unintended overflow, clipping, overlap, covered anchors, or unreadable controls.
- Keyboard order, names, semantics, visible focus, and actual state contrast are usable.
- First-viewport content remains reachable at representative short desktop and mobile heights.
- The combined header and hero consume one declared first-screen height budget; no external header is stacked above an additional `100svh` hero.
- Hero surfaces and media reach their intended boundary without an orphan page-background strip; any next-section reveal contains meaningful content and must-inspect subjects survive the crop.
- Sticky chrome does not obscure content and split regions do not produce accidental dead space.
- Visible copy preserves intended words, spacing, punctuation, and accessible reading order.
- Nonessential motion respects reduced motion.
- Media reserves stable dimensions and claims are honest.
- Run the repository's available checks that match the work and report only checks actually executed.

Do not score the page during normal generation. Load [quality and validation](references/07-quality-and-validation.md) only for audits, evaluations, production hardening, evidence reports, or severity-based review.

## Reference map

Load only the references needed for the task:

- [Routing and precedence](references/00-routing-and-precedence.md)
- [Task modes](references/01-task-modes.md)
- [Composition](references/02-composition.md)
- [Foundations](references/03-foundations.md)
- [Responsive and accessibility](references/04-responsive-accessibility.md)
- [Interaction and motion](references/05-interaction-motion.md)
- [Assets, copy, and data](references/06-assets-copy-data.md)
- [Quality and validation](references/07-quality-and-validation.md)
- [Product and stack routing](references/08-product-stack-routing.md)
- [Safety and provenance](references/09-safety-provenance.md)
- [Visual direction](references/10-visual-direction.md)
- `references/catalog.*.json`: structured patterns, anti-patterns, and gates. Read only relevant entries.
- `examples/`: decision demonstrations, never templates.

## Completion contract

Do not stop at a proposal when implementation is requested. Finish the working path, run the available checks that match the task, inspect representative layouts when practical, fix material findings, and report remaining limitations without claiming tests that did not run.
