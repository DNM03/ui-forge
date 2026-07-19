---
title: Composition
summary: Choose macrostructure, hierarchy, structural fingerprints, and responsive reading order before components.
order: 20
---

## Macrostructure

Select a structure that matches the user outcome:

- **Task workspace:** persistent navigation, utility bar, primary canvas, contextual secondary panel.
- **Data overview:** summary strip, comparison controls, prioritized data regions, drill-down path.
- **Editorial:** strong reading column, supporting index or metadata rail, deliberate media rhythm.
- **Product detail:** inspectable product media, essential facts, configuration, trust details, clear action.
- **Campaign:** full-bleed subject or product signal, concise offer, visible next section, progressive evidence.
- **Branded front door:** unmistakable name or offer, authored visual field, concise orientation, direct entry, and real output or interaction proof.
- **Reference corpus:** compact global wayfinding, clear index or reading route, strong search, restrained article measure, and stable next/previous movement.
- **Form flow:** progress context, focused step, inline validation, recovery, completion state.

Do not default to a centered headline, feature-card grid, repeated split bands, or dashboard cards when the content suggests another structure.

## Route-specific shells

Treat the shell as part of the route's job:

- A public skill, product, venue, portfolio, or brand front door should establish identity and evidence before exposing dense navigation. Prefer a compact floating or inline navigation when the destination set is small.
- A repeated operational workspace can justify persistent navigation because switching and scan speed are primary tasks.
- A long reference route should optimize reading measure, table-of-contents access, search, and continuation rather than inherit the visual weight of either the hero or a dashboard.
- Keep shared tokens, link behavior, focus treatment, and naming across shells so route-specific composition does not become a disconnected microsite.

Do not treat shell consistency as identical chrome. Consistency is a coherent system serving different route jobs.

## Reference transformation

Study references as separable traits: information hierarchy, rhythm, type contrast, edge treatment, navigation behavior, and proof strategy. Do not reproduce a reference's recognizable combination of shell silhouette, capsule geometry, hero structure, font pairing, and accent placement.

Before implementation, name which traits are retained and make at least two material structural choices that come from the target product rather than any one reference. Compare the rendered result with the references at thumbnail scale; if the page reads as the same product with different copy, redesign the shell.

## Bleed and container contract

For every major section, define two independent extents:

- **Background extent:** viewport edge, page container, or component boundary.
- **Content extent:** shared page container, reading measure, panel grid, or control width.

Use a full-width wrapper with a constrained inner layout when a color, image, or material should bleed while content remains aligned. Do not calculate large child padding from `100vw` when that child is already inside a centered or max-width container; this double-applies the gutter and creates empty space on wide screens.

Adjacent constrained sections should share measurable left and right edges unless the offset is intentional. Verify the computed `x` position and width at wide desktop, compact desktop, tablet, and mobile sizes.

## Inset and sibling-gap contract

Declare five spacing roles independently:

- page or container gutter;
- gap between major sections;
- inset inside bordered or tinted surfaces;
- vertical stack gap between headings, copy, controls, and metadata;
- row and column gap between peer controls or items.

A visible border, background surface, or rounded boundary normally requires content inset on every occupied edge. A divider line is the exception because it separates content rather than containing it. Text, icons, media, and controls must not touch a container border unless an explicit full-bleed crop or edge-aligned interaction is the central idea.

Use `gap`, grid tracks, or an equivalent explicit layout rule for sibling relationships. Do not depend on collapsed margins, whitespace characters, `justify-content: space-between`, or incidental intrinsic width to create breathing room. On smaller screens, step down to a smaller spacing token rather than removing the gap. A zero gap is valid only for a deliberate seam such as segmented controls, table cells, tiled media, or a continuous rule.

Inspect the tightest real state: longest label, selected outline, validation message, wrapped body copy, and mobile stack. Focus rings and shadows also need clearance from neighboring content and clipping boundaries.

## System constants and flexible signature

Define two stable system-level traits and one flexible signature. Prefer traits that create coherence without decorating every section:

- container alignment and reading measure;
- type roles and emphasis logic;
- primary and secondary action treatment;
- media crop or edge behavior;
- one transition or reveal behavior;
- density and whitespace relationships.

Repeat the constants with controlled variation. Do not apply every decorative motif to every region. A motif repeated in more than two adjacent regions needs a functional or brand reason.

Before implementation, map each long-page region as `job | layout family | type role | evidence/media | density`. Rewrite adjacent duplicate rows. Vary scale, alignment, surface, and media cadence while preserving the same system.

## Hierarchy

Make the primary outcome obvious through position, scale, contrast, and surrounding space. Keep no more than one dominant action per local decision region. Secondary actions should remain discoverable without visually competing.

Establish one display apex for a normal long page. Use hero-scale type once, usually at the entry or one intentional editorial climax. Section headings must step down materially or derive emphasis from media, composition, density, or interaction. Compact panels, tables, sidebars, and tools need tighter type and stable row dimensions.

Avoid hard line breaks in responsive headings and prose unless the phrase must remain editorially fixed at every supported width. Prefer a measured container, responsive type step, and an inline or block phrase span so the browser can reflow naturally.

## Split-region height balance

For side-by-side hero, product, comparison, or editorial regions, compare the natural heights using the longest real content. When one side is materially taller, choose one explicit response:

1. balance the content or give the shorter side a meaningful media, summary, or action region;
2. keep the shorter side sticky only within the start and end bounds of the shared section;
3. recompose long controls or details into a following full-width band;
4. switch to a sequential layout before the mismatch creates a dead column.

Do not use an oversized minimum height to disguise the mismatch. Do not create independent scrolling inside one column unless comparing persistent content is the actual task. Sticky children must release before the next section and must not cover content while the taller sibling continues.

## First-viewport height budget

Budget height before selecting the final hero type step. For each representative short desktop and mobile viewport, calculate:

```text
first-screen budget = viewport height
  - safe-area allowance

hero budget = first-screen budget
  - header or chrome rendered above the hero
  - intended next-section reveal

required stack = entry top/bottom spacing
  + eyebrow or metadata
  + title line box
  + supporting copy
  + primary proof or action
  + vertical gaps
```

Treat an integrated header and hero as one first-screen component. Prefer a `min-height: 100svh` wrapper with grid rows `auto minmax(0, 1fr)`, then allow the hero row to shrink with `min-height: 0`. If the header remains outside, subtract its measured rendered height from the hero budget. Never stack an external header above a child hero that independently uses `100vh` or `100svh`.

At default text size, the required stack must fit inside the hero budget without clipping, overlap, transform scaling, or an `overflow: hidden` escape. Use the longest real title and action copy, not placeholder text. A heading that technically remains inside its own box still fails when its scale pushes required orientation, proof, or the primary action below a fixed hero boundary.

Repair an over-budget entry in this order:

1. Remove copy or controls that are not required for the first decision.
2. Reduce excessive top/bottom spacing and decorative gaps.
3. Choose a smaller discrete display type step or a wider safe title measure to reduce accidental lines.
4. Recompose media and secondary proof rather than shrinking body text or controls.
5. Let the entry grow and the document scroll naturally when the brief does not require a one-screen composition.

Do not impose one global hero height or font-size ceiling. Editorial posters may spend more height on type, while commerce and product entries need earlier facts and actions. Fixed `100vh` or `100svh` heroes are especially fragile when combined with separate headers, mobile browser chrome, long copy, or `overflow: hidden`; give the whole first screen one viewport budget or use content-driven sizing.

## Responsive recomposition

Define content priority before breakpoint CSS. On narrow screens:

- preserve reading and focus order;
- move contextual panels below the primary task or into a labeled disclosure;
- convert wide tables only when a card or list preserves comparison meaning;
- maintain stable controls and touch targets;
- crop media intentionally instead of hiding the subject;
- keep a hint of following content when the first viewport is promotional.

Do not shrink every dimension proportionally. Change columns, order, grouping, labels, and disclosure based on task priority.

## Cards and surfaces

Use cards for repeated entities, selectable options, modals, and genuinely framed tools. Prefer dividers, whitespace, headings, and full-width bands for page sections. Never nest decorative cards. A border or tinted surface must communicate grouping, state, or affordance.
