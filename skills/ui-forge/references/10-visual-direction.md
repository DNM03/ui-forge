---
title: Visual direction
summary: Choose art direction, visual hooks, and mood so honest interfaces still feel premium and memorable.
order: 100
---

## Visual ambition

For public, brand, commerce, editorial, portfolio, event, and skill surfaces, choose a visual ambition before detailed layout:

- **Polished:** clean hierarchy, strong spacing, refined controls, restrained accent.
- **Editorial:** expressive type contrast, authored crops, asymmetric rhythm, strong reading voice.
- **Cinematic:** immersive subject image or scene, dramatic light, controlled overlay, sparse copy.
- **Luxury:** material restraint, close-up subject detail, quiet type, generous negative space.
- **Technical:** dense artifact, terminal/code/data object, precise grid, high contrast.
- **Playful:** custom shapes, bolder color, tactile controls, surprising but coherent motion.
- **Experimental:** unusual composition, fragmented type, spatial interface, strong constraints.

Match the ambition to the audience and product. A hackathon can be energetic and technical without fake numbers. A florist can be cinematic and luxurious without inventing press quotes. A software deal page can be sharp and commerce-oriented without generic SaaS gradients.

## Macrostructure route

Pick a page shape before styling details. Strong visual work usually comes from structure, not decoration:

- **Poster + artifact:** oversized title paired with one inspectable object such as a command, pass, receipt, player, code card, or selector.
- **Image-led scene:** authentic or generated subject image drives the crop, color, and reading order.
- **Editorial split:** a strong reading voice with asymmetric media, annotations, pull words, or side notes.
- **Tool-first:** the primary control, configurator, comparison, or workflow appears immediately.
- **Product shelf:** inspectable products, packages, screenshots, or output cards form the first proof.
- **Manifesto/index:** a bold claim or rule system followed by a dense index, rubric, timeline, or collection.
- **Custom:** one central idea unique to the product, with a simple rule that repeats across sections.

Do not choose the same centered hero plus three cards unless the product genuinely needs it. If the first thumbnail silhouette looks like a default AI landing page, change the macrostructure before adding effects.

## Design dials

Set these dials before implementation:

- **Variance:** 1-3 for operational tools, 4-6 for polished SaaS and docs, 7-9 for campaigns, portfolios, events, editorial, de-slop, and creative products.
- **Motion:** 1-3 for state feedback, 4-6 for one authored reveal or selector, 7-8 only for motion-native or campaign work. Avoid 9-10 unless the user asked for an experimental experience.
- **Density:** choose per region. A public page can combine a sparse poster hero, a dense proof artifact, a compact index, and a focused form.

High variance does not mean chaos. It means the page has a stronger structural decision than the default model pattern.

## Visual hook

Every memorable public page needs one primary hook. Pick one:

- oversized typographic composition with one surprising word, italic, image pill, or annotation;
- full-bleed subject image with an uncommon crop and readable foreground;
- product or artifact cluster that shows what users get;
- interactive chooser, configurator, command, player, map, timeline, or comparison;
- editorial object such as a record, botanical arrangement, receipt, code card, or agenda card;
- dense proof panel with real states, constraints, and outcomes.

The hook must support the product. Do not add decorative blobs, generic neon networks, or stock ambience when the subject can be shown directly.

## Premium execution

Use craft instead of hype:

- Give display type a clear role, weight, measure, and line-break strategy.
- Pair type with one strong visual material: photo, artifact, code, object, diagram, map, audio player, or product image.
- Let sections change rhythm: poster entry, proof artifact, catalog/index, process, form.
- Use cards only when they represent actual objects, choices, products, or records.
- Prefer one decisive accent to many scattered accents.
- Make buttons and controls feel designed through size, alignment, states, and icon choice, not decoration.

## Typography with taste

Do not default every ambitious page to a heavy geometric sans. Choose type like a design material:

- **Editorial/luxury:** pair a neutral UI sans with Playfair Display, Cormorant, Newsreader, Fraunces, Libre Baskerville, or an equivalent expressive serif for highlighted words, quotes, titles, prices, or object names.
- **Technical:** use a precise mono or narrow sans for labels, metadata, timestamps, code, receipts, and proof artifacts while keeping body text highly readable.
- **Commerce/product:** use a calm sans for buying decisions and a display face only where it adds brand or product character.
- **Event/campaign:** use one display move: italic word, condensed title, oversized number, custom line break, or image pill. Do not use every move at once.

When adding a new font, prefer the project's existing font loader or local assets. If network font loading is not appropriate, use a strong fallback stack and still create contrast through scale, weight, style, and spacing. Keep body copy readable and avoid display fonts for long paragraphs, forms, tables, or dense controls.

Use hero math:

- On normal landing pages, keep the main display title to two or three intentional desktop lines. A poster-style page may go taller only when the crop and first action still work.
- Keep subcopy compact enough to scan, usually one short paragraph.
- Make the first action visible without hunting.
- Avoid accidental one-word lines; use measured containers, `text-wrap: balance` where supported, and responsive type steps.
- On mobile, preserve the visual hook or proof near the top. Do not stack a giant headline, long paragraph, two buttons, and metrics before the page shows why it is special.

## Motion and interaction

Motion should make the interface feel alive without becoming a template effect:

- Pick one primary motion idea: object assembly, card selection, command copy, timeline advance, marquee, media reveal, or input confirmation.
- Keep state feedback immediate and tactile: hover, active, selected, focus-visible, loading, and success should feel intentional.
- Use reduced-motion alternatives for travel, parallax, marquee, and repeated entrance effects.
- Avoid universal scroll fades, cursor followers, bounce easing, endless particle animation, and `transition: all`.
- For plain HTML/CSS/JS, simple CSS keyframes and small event-driven class changes are usually enough.

## Imagery and generation

Use images when they make the page more specific:

- Prefer real product, place, object, person, inventory, output, or artifact imagery when available.
- Use generated bitmap imagery when no authentic asset exists and the user allows or expects generated visuals.
- Generated imagery should create a concrete scene, object, material, or product proof: studio floral close-up, event lab scene, software box cluster, audio object, interface artifact, venue detail, or before/after output.
- Do not use generated images as fake evidence of real people, customers, venues, sponsors, awards, or product screenshots.
- Reserve dimensions, crop intentionally, and keep the subject inspectable. Avoid dark overlays that hide the thing users need to see.

When image generation is available, an image-first workflow can improve aesthetic quality:

1. Decide the concrete subject and role: hero crop, product close-up, artifact, background material, or section illustration.
2. Generate or curate one focused asset, not a mood-board collage.
3. Inspect the image and extract composition traits: crop, light, palette, texture, negative space, and subject direction.
4. Build the layout around those traits instead of dropping the image into a finished generic template.
5. Label or frame synthetic assets honestly when they could be mistaken for real proof.

## Craft guard

After implementation, fix visual ambition failures before delivery:

- Hero type must be intentionally framed, never accidentally clipped or forced below the fold by its own scale.
- Adjacent sections need rhythm changes in alignment, density, surface, or media; do not repeat the same giant heading plus grid.
- Large empty space must create focus, tension, or reveal. If it only looks unfinished, tighten it.
- Accent color should guide attention. If every label, button, and number glows, nothing is special.
- Mobile must preserve the primary hook and first action. Do not push the artifact, image, or proof below a wall of text.
- If a generated page still looks like "AI landing page", change the art direction route rather than adding more decoration.

## Pre-delivery critique

Before finalizing a public page, score the design from 1-5:

- **Concept:** is there one memorable idea?
- **Hierarchy:** can someone identify subject, proof, and action in a short scan?
- **Execution:** do type, spacing, media, states, and mobile look deliberate?
- **Specificity:** would this structure still work if the brand name changed? If yes, make it more product-derived.
- **Restraint:** are effects, accent colors, typefaces, and surfaces used selectively?
- **Variety:** do adjacent sections change rhythm without feeling disconnected?

Revise any weak score before delivery. The skill should make the result look more authored than no-skill output, not merely more cautious.

## Avoid the safe middle

These outputs are usually not good enough for the skill:

- dark background, centered title, muted copy, two buttons, and equal cards;
- a trustworthy but visually flat page with no hero object or authored rhythm;
- a layout that removes fake claims but replaces them with empty disclaimers;
- a product/event page where the first viewport could belong to any similar product;
- images that are only atmospheric and do not create a specific point of view.

When truth constraints remove fake stats, replace them with better visual proof: sample agenda, product close-up, interface state, artifact card, before/after, track chooser, real inventory, or a labeled draft.
