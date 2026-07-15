---
title: Foundations
summary: Establish proportional tokens for color, typography, spacing, shape, elevation, and icons.
order: 30
---

## Foundation order

Use the first viable source:

1. Existing project tokens and components.
2. Official platform or established product system required by the brief.
3. Maintained primitives already installed.
4. A minimal custom system.

Do not mix unrelated component systems. A visual imitation without the original interaction and accessibility behavior is not faithful system use.

## Color

Define semantic roles before raw swatches: canvas, surface, elevated surface, text, muted text, border, action, focus, success, warning, and failure. Verify every foreground/background pair actually used. Do not communicate state by color alone.

Avoid a one-note palette. Neutral structure plus distinct semantic hues is usually clearer than tinting every surface in the brand accent. Gradients, glow, and transparency require a product or brand reason.

Choose the base palette, accent family, and surface material as one system. Use at most one intentional contrast or inversion band unless a color progression is the explicit concept. Do not infer black and fluorescent accents from technical subject matter, or cream and metallic accents from the word premium.

## Typography

Assign roles for display, page title, section title, body, label, metadata, and code or numeric data. Use no more font families than the product needs. Choose fonts for language coverage, readability, tone, and loading constraints rather than fashion.

Prefer same-family weight, width, case, or italic contrast when it creates enough hierarchy. Add a second family only when the content needs another voice. Reserve monospace for code, data, or authentic technical metadata; decorative uppercase mono labels and numbered eyebrows should not become a pagewide identity by default.

Keep body measure readable, line height proportional, and letter spacing at zero unless the existing brand system explicitly says otherwise. Do not scale font size directly with viewport width. Use responsive steps or container-aware layout instead.

Treat line breaking as part of the type contract. Ordinary copy must not rely on hard `<br>` elements, narrow max-widths, or oversized padding that produces one- or two-word lines. Test the longest real heading, body copy, metadata, and action labels at every representative width and text zoom level.

Choose display size from both available width and available height. Declare the intended title line count, measure the complete entry stack at a representative short desktop and mobile height, and step the title down when it crowds out required copy, proof, or the primary action. Do not solve height pressure with viewport-width font scaling, compressed line height that causes glyph collisions, transform scaling, hidden overflow, or unreadably small supporting text.

Use content-sensitive display bounds rather than one global ceiling. For self-authored landing-page copy, prefer a heading around seven words or 50 characters or fewer. Step down from 51 to 90 characters; beyond that, rewrite when allowed or use page-title scale. Normal landing-page display type should generally remain at or below about `5.5rem` (`88px`); about `6rem` is a poster exception, and about `7rem` is reserved for one short word or value around 12 characters or fewer. Explicit brand or editorial systems may exceed these defaults only when the full first-viewport budget remains intact.

Define alignment by role. In metric strips and repeated data cells, decide independently whether labels, values, units, and trends align left, center, baseline, or decimal. Do not let `align-self`, `justify-content`, or intrinsic width accidentally determine the visual rule; inspect the rendered bounding geometry when symmetry matters.

## Spacing and grid

Use a compact base scale with named layout gaps. Align repeated controls and data columns. Reserve stable dimensions for toolbars, boards, counters, tiles, and rows so state changes do not resize the interface.

Use container constraints, grid tracks, aspect ratios, and min/max sizes to prevent clipping and overlap. Avoid arbitrary values when a nearby token already expresses the relationship.

Model full-bleed paint separately from constrained content. A viewport-wide background should not force its text or controls outside the shared page grid, and a constrained panel should not inherit viewport gutters a second time.

## Shape and elevation

Choose one radius family and a small elevation ladder. Operational interfaces usually benefit from restrained radii and borders. Shadows should communicate layering or interaction, not decorate every element.

## Icons

Use the installed icon library when it contains the required symbol. Match stroke weight, optical size, and filled versus outline treatment. Icon-only buttons need accessible names, stable square targets, and tooltips when the symbol is unfamiliar.

Do not hand-draw SVG icons when a maintained library has the symbol. Do not use emoji as product controls.
