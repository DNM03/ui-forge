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

## Structural fingerprint

Define a small set of repeated traits:

- heading alignment and measure;
- body-column width and rhythm;
- divider and surface behavior;
- primary and secondary action voice;
- media crop and edge treatment;
- transition or reveal pattern;
- density and whitespace contrast.

Repeat these traits with controlled variation. Repetition creates identity; identical section templates create monotony.

Before implementation, sketch a rhythm map for long pages: entry, proof, explanation, index, evidence, and continuation. Vary scale, alignment, surface, and media cadence between adjacent regions while preserving the fingerprint.

## Hierarchy

Make the primary outcome obvious through position, scale, contrast, and surrounding space. Keep no more than one dominant action per local decision region. Secondary actions should remain discoverable without visually competing.

Use display-sized type only for genuine heroes or editorial moments. Compact panels, tables, sidebars, and tools need tighter type and stable row dimensions.

Avoid hard line breaks in responsive headings and prose unless the phrase must remain editorially fixed at every supported width. Prefer a measured container, responsive type step, and an inline or block phrase span so the browser can reflow naturally.

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
