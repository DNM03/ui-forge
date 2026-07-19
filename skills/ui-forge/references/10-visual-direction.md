---
title: Visual direction
summary: Explore and select a product-derived aesthetic direction before implementation without converging on a house style.
order: 100
---

## Direction is a decision, not a recipe

Premium output begins with a fitting idea, not a fashionable treatment. Derive the direction from the product thesis, audience, content, available assets, brand permission, and desired feeling. Subject labels are weak visual evidence: `AI`, `blockchain`, `developer`, `luxury`, `wellness`, or `finance` do not determine a palette, font, motif, or page shell.

Before detailed CSS, form three compact internal candidates. Do not present a mood-board essay unless the user asks. Each candidate must differ materially in:

- primary visual carrier;
- page silhouette and reading route;
- typography voice;
- color and material logic;
- section rhythm.

At least one candidate should create distinction through restraint. Reject candidates that are only color swaps or the same hero with different decoration.

## Select by fit

Choose the direction that best satisfies:

1. **Category resonance:** without relying on the logo or explanatory copy, the visual world feels native to the subject and audience.
2. **Visual magnetism:** the first viewport has one subject, artifact, composition, or event strong enough to earn attention.
3. **Audience fit:** it creates the right confidence, appetite, focus, urgency, or ease.
4. **Subject evidence:** its main visual carrier can be supported by real content or a truthful illustrative asset.
5. **Content fit:** the structure handles the actual amount and order of information.
6. **Brand distance:** it respects existing identity while avoiding interchangeable category defaults.
7. **Motion opportunity:** the central idea can produce one perceptible, subject-specific behavior.
8. **Responsive viability:** its core idea survives narrow widths and short heights.
9. **Production fit:** it can be implemented cleanly with the available stack, time, and assets.

Do not choose the loudest candidate merely because it differs most from a generic template. Do not choose a calm or restrained candidate merely because it is easier to implement or defend. If the direction could sell software, shoes, architecture, and consulting after replacing the nouns, it lacks category resonance.

## Choose the visual carriers

Select one primary carrier and one quieter supporting carrier:

- **Imagery and material:** photography, generated bitmap art, texture, product close-up, place, person, object, or process.
- **Typography and language:** editorial pacing, naming, quotations, scale, contrast, or verbal rhythm.
- **Product artifact:** real interface, output, package, inventory, document, code, or physical artifact.
- **Interaction:** chooser, configurator, timeline, comparison, player, map, or other meaningful behavior.
- **Data and evidence:** real measurements, program details, state, availability, schedule, or comparison.
- **Spatial composition:** crop, overlap, layering, asymmetry, progression, or a deliberate field.

Keep the remaining carriers quiet. A page where typography, grids, noise, motion, cards, illustrations, and data all compete does not feel premium.

## Aim for visual authorship

Use these benchmark qualities to judge the selected direction before detailed implementation:

- **Immediate identity:** the first viewport has a recognizable silhouette and makes the product, place, object, person, offer, or idea unmistakable.
- **Subject authority:** important media is large enough, sharp enough, and well cropped enough to carry the page rather than decorate a panel.
- **Typographic character:** one deliberate type move creates recall; the rest of the hierarchy supports it without repeating the spectacle.
- **Compositional tension:** crop, overlap, alignment, asymmetry, negative space, or scale creates a reason for the eye to move.
- **Rhythm:** the page changes pace across immersive, dense, open, and focused regions while remaining one visual world.
- **Material coherence:** color, surface, edge, media, and motion feel chosen together rather than added as independent effects.
- **Interaction character:** one visible behavior makes the page feel alive and belongs to the subject.

A safe specification sheet can satisfy every content requirement and still fail this benchmark. Correctness does not replace desire, atmosphere, authorship, or visual confidence on a public front door.

## Pass the first-ten-second test

Before detailed implementation, imagine the route as a static first viewport and a short interaction:

1. **Two seconds:** one focal subject or compositional event wins immediately.
2. **Five seconds:** the category, offer, and intended feeling are legible without explanation.
3. **Ten seconds:** a crop, state change, motion, or interaction reveals a second layer of meaning.

Fail the route if the only memorable quality is a palette, oversized heading, rounded shell, or decorative effect. Fail it if the primary asset is attractive but semantically unrelated to the product. Change the carrier or central move before polishing components.

## Choose a front-door strategy

Use these as strategy families, not templates:

- **Immersive subject field:** full-bleed or edge-dominant photography, generated art, video, or a rendered scene with copy placed in real negative space.
- **Editorial type composition:** a memorable verbal arrangement with controlled scale, inline media interruptions, italic or width contrast, and deliberate line choreography.
- **Artifact tableau:** layered real outputs, interface states, packages, documents, or product artifacts arranged as one scene rather than a grid of cards.
- **Product stage:** a large inspectable object or interface, usually unframed or held by one meaningful boundary, with concise supporting facts.
- **Media-led catalog:** strong photography or render crops in an authored shelf, mosaic, or sequence whose aspect ratios reflect content importance.
- **Kinetic poster:** typography, graphic form, and motion lead when the subject is abstract, event-based, or has no inspectable object.

The strategy must fit the subject and asset quality. Do not choose a product stage when the only available subject is a tiny icon-like drawing, and do not force immersive photography when no credible image can be produced.

## Resolve the hero boundary

Choose one boundary behavior before styling the hero:

- **Full viewport:** give the complete first-screen composition one viewport budget. When the header is visually part of the entry, use one wrapper:

  ```css
  .first-screen {
    min-block-size: 100svh;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .hero {
    min-block-size: 0;
  }
  ```

  When the header is outside that wrapper, size the hero against the remaining space with `min-block-size: calc(100svh - var(--measured-header-height))`. Keep the variable synchronized with the rendered header, including breakpoint changes. Let content grow and scroll rather than clipping it on short screens.
- **Intentional next-band reveal:** expose a meaningful slice of the next section, such as its label, subject, contrasting surface, or first content row. The reveal should make scrolling feel inevitable.
- **Content-led entry:** let the hero size to content when neither full immersion nor a reveal serves the direction. End it on a clear compositional boundary.

Never place an external header above a child hero that independently owns `100vh` or `100svh`; that creates a first screen taller than the viewport and cuts the hero at ordinary laptop heights. Do not use arbitrary `80vh` or `90vh` sizing to compensate, because it creates thin body-colored strips at other heights. Inspect the computed header bottom, hero bottom, and viewport bottom at representative desktop, mobile, and short-height viewports.

## Protect the commerce spine

For retail, food, apparel, product, and subscription pages, visual ambition must preserve the information that lets people evaluate and buy. Reveal concrete merchandise by the first natural scroll: product name, price or plan, meaningful variant or flavor details, availability when relevant, and an unambiguous purchase or subscription action.

An atmospheric hero may create appetite, but it cannot be the only product evidence. Follow it with an inspectable product shelf, product-detail stage, bundle or plan chooser, or another commerce-specific structure. Generated imagery may establish the world, but it does not replace truthful SKU imagery, inventory details, or purchasing states.

## Build a complete theme

Set theme axes together rather than swapping a single color:

- **Lightness and paper band:** light, mid, dark, or an intentional progression.
- **Display voice:** quiet humanist, editorial, utilitarian, expressive, compact, or project-specific.
- **Accent family:** one coherent attention color or an existing brand set.
- **Color deployment:** accent punctuation, one intentional full-bleed field, or a small controlled brand set.
- **Material logic:** flat ink, photographic, tactile, luminous, industrial, soft, or platform-native.
- **Edge and surface behavior:** open layout, rules, frames, cards, elevation, or full-bleed media, used only where they carry meaning.

Use one base theme and at most one intentional contrast or inversion band unless color progression is the central concept. A custom theme must be a coherent system, not a color variation of a familiar shell.

Choose exactly one color deployment mode and one accent family unless supplied brand evidence requires more. Do not combine accent punctuation, a saturated full-bleed field, offset accent shadows, repeated accent rules, colored labels, and multiple action hues as separate attention systems.

## Transform genre defaults

Name three tempting visual shortcuts for the brief. Decide which cues genuinely help recognition, which are supported by brand or subject evidence, and which should be suppressed. Do not ban a useful category vocabulary merely to appear original. Transform at least one familiar cue into a product-specific carrier, interaction, crop, or compositional rule.

For technical subjects, common shortcuts include dark canvas, fluorescent green, mono labels, numbered eyebrows, visible grid, terminal chrome, orbital diagrams, outlined type, condensed all-caps, and hard borders. A coordinated subset can be correct when it visualizes the actual mechanism or desired feeling. Discard it when the combination is literal, decorative, and interchangeable with another technical product.

Apply the same reasoning to other categories:

- premium does not automatically mean cream, brass, serif italics, and excessive empty space;
- commerce, shoes, fashion, studio, or craft do not automatically mean cream canvas, brown or burgundy accents, display serif, floating pill navigation, soft rounded panels, and sepia material swatches;
- wellness does not automatically mean beige, rounded cards, soft gradients, and leaf imagery;
- finance does not automatically mean navy, green deltas, glass cards, and invented charts;
- creative does not automatically mean giant type, stickers, marquees, and cursor effects.

## Compose the page silhouette

Name the macrostructure in plain language based on how the content should be encountered. Examples of structure families include an image-led sequence, a comparison workspace, a product or artifact shelf, a focused editorial reading route, a guided task, a compact catalog, a narrative progression, or a custom composition derived from the subject.

These are families, not templates. Define the actual silhouette: where density changes, where the eye rests, when evidence appears, and how the action path develops. If two candidates have the same thumbnail silhouette, they are not materially different.

When existing project pages or recent artifacts are available, inspect their macrostructure, typography treatment, accent deployment, edge language, navigation, and footer. If the new candidate repeats the same macrostructure and two or more strong motifs, reroute it. This is a working comparison, not a reason to create public logs or metadata.

For references, retain no more than five principles and change at least two of shell silhouette, navigation geometry, hero structure, accent placement, section rhythm, or evidence strategy. Never reproduce the reference's full combination.

## Choreograph sections before markup

Map every major section before building components:

```text
job | layout family | type role | evidence or media | density
```

Rewrite adjacent duplicate rows. A long page needs controlled rhythm, not a new hero at every scroll stop. Change one or two dimensions between adjacent regions while maintaining the same visual world:

- alignment or content measure;
- media ratio or crop;
- density and whitespace;
- surface or background extent;
- interaction or reading mode.

Do not manufacture variety with arbitrary color flips, random angles, or unrelated component styles.

Do not append the same shared tail to every public page. Features, proof cards, pricing, CTA, and footer are not a mandatory sequence. Include only content the brief supports, and vary its representation according to the selected direction and decision path.

## Budget high-impact moves

For most public pages:

- one display apex, used once;
- one signature visual object or subject;
- one primary motion motif;
- one texture or decorative field;
- one coherent accent logic.

Section headings should be materially subordinate to the display apex unless one alternate editorial climax is deliberately selected. Adjacent sections must not repeat the same high-impact move. Numbered or uppercase mono labels should be rare and should describe real sequence or metadata, not simulate sophistication. Grid lines should align, compare, or separate actual content.

## Typography as a system

Assign display, section, body, label, and data roles. Choose families by brand character, language coverage, width, weight range, readability, and loading constraints.

- Prefer same-family weight, width, case, or italic emphasis when it supplies enough contrast.
- Add a second family only when it creates a necessary voice distinction.
- Reserve mono for code, data, or genuinely technical metadata; it is not a universal premium accent.
- Keep body copy within a readable measure and prevent section copy from collapsing into narrow one- or two-word lines.
- Plan hero copy, display scale, and focal media together. On a normal landing page, target no more than two intentional desktop headline lines unless a poster composition is explicitly chosen and the full entry still fits.
- Preserve whitespace and punctuation in split or animated display copy. Prefer an intact accessible text node with decorative spans hidden from assistive technology; inspect the final rendered phrase for merged words and changed names.

For self-authored landing-page copy, prefer a main heading at about seven words or 50 characters or fewer. From 51 to 90 characters, step down the display size and widen the safe measure as needed; beyond that, rewrite when editorially allowed or treat it as a page title rather than a display stunt. As default desktop bounds, keep normal landing-page display type at or below about `5.5rem` (`88px`), allow about `6rem` only when poster-scale typography is the central move, and reserve about `7rem` for a single short word or value around 12 characters or fewer. Existing brand systems and explicit editorial art direction may exceed these bounds only when the first-viewport budget still passes.

Use discrete responsive type steps. Do not scale font size directly with viewport width, clip display text, or let the headline crowd out the subject signal and action.

## Color, media, and motion

Use a coherent base palette with deliberate accent placement. Verify actual foreground and background combinations, including interaction states. Accent color should guide attention rather than coat every label, number, border, and button.

Prefer the strongest truthful subject signal available: real product state, authentic media, event program, place, inventory, output, workflow, data, or interaction. Do not invent a terminal, dashboard, or product panel merely to make an orientation page look technical. Generated media may create an illustrative scene, material, or object, but it must not masquerade as evidence.

For a visual subject, inspect the ratio between the subject and its media region. The item should normally dominate or deliberately tension the crop, not float at icon scale inside an empty frame. Avoid nested frames around a hero asset unless the frame itself carries product meaning. If the asset is weak, replace or regenerate it before polishing surrounding panels.

For cover-cropped hero media, define the focal subject and its safe area before generation or selection. Keep products, faces, labels, and essential silhouettes away from vulnerable edges, then test the actual container at wide desktop, short laptop, and narrow mobile ratios. Use a deliberate `object-position`, art-directed alternate asset, or a different composition when `cover` cuts information users need to inspect. A dramatic crop may cut atmosphere; it must not accidentally cut the product proof.

Motion should communicate state, hierarchy, causality, or story. On expressive public pages, make one motif clearly perceptible during ordinary use: reveal the subject, shift the crop, assemble an artifact, transition a selected state, move a typographic phrase, or progress a sequence. Support it with no more than two quieter layers, such as ambient depth and responsive pointer or scroll feedback, when they share the same visual logic. A faint ambient sweep inside a large panel is support, not a motion signature. Complete hover, active, focus-visible, loading, and success feedback where relevant. Avoid universal entrance animation, cursor followers, endless particles, bounce easing, and `transition: all`.

## Craft refinement

After implementation, make one visual refinement pass:

- resolve optical alignment, crop, spacing, type fit, and responsive hierarchy;
- verify that a full-viewport hero reaches its bottom edge or that its next-band reveal is visibly intentional;
- verify that the header and hero share one viewport-height budget rather than stacking an external header above a `100svh` child;
- inspect must-see subjects inside the actual `cover` crop at a short laptop height and narrow mobile width;
- read display copy exactly as rendered and fix merged words, lost spaces, punctuation errors, and broken brand or product names;
- inspect the first viewport as a grayscale thumbnail and at normal scale; strengthen the focal carrier if both views distribute attention evenly;
- remove repeated display spectacle, decorative rules, and fake technical labels;
- tighten empty space that creates no focus or tension;
- on commerce pages, confirm that atmosphere has not displaced product, price, options, and the buying or subscription path;
- preserve the subject signal, action, and identity on mobile;
- inspect one representative scroll for scene change, sticky overlap, and visible motion payoff;
- change the direction rather than adding effects if the page still resembles a category template.

Formal scoring, severity, and audit evidence belong in `references/07-quality-and-validation.md`, not in the normal generation path.
