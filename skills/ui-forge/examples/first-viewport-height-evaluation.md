# First-Viewport Height Evaluation

Use this evaluation after a simple prompt leaves content volume and hero scale mostly unconstrained.

## Test prompt

```text
Create a landing page.
```

Use the real or generated page title, orientation copy, proof, and primary action from the result. Do not replace difficult content with shorter fixture text to obtain a pass.

## Stress profiles

Inspect the project's supported viewport matrix. When none exists, use these default stress profiles:

- 1280 by 720 CSS pixels for a short desktop;
- 390 by 667 CSS pixels for a short mobile;
- one ordinary desktop and mobile profile to ensure the repair does not over-compress the design.

These are evaluation probes, not universal browser support requirements.

## Required geometry

At default text size, collect or visually establish:

```text
viewport height
fixed or sticky chrome bottom
hero top and bottom
title top and bottom
required orientation/proof bottom
primary action bottom
next-section top and first meaningful content cue
document scroll height
```

Pass when:

- the title is fully visible and has no glyph collision or accidental extra line;
- fixed chrome does not cover the title or action;
- required orientation, proof, and the primary action are visible inside the declared first-viewport budget;
- the promotional entry reveals a meaningful label, heading, media edge, control, or other content cue from the next section, rather than only its empty background, when that is part of the composition contract;
- no fixed hero boundary or hidden overflow clips content;
- the document can scroll naturally when content needs more height.

Fail when:

- a headline fits horizontally but extends below the visible hero or overlaps later content;
- a fixed `100vh`, `100svh`, or pixel height ignores a separate header;
- typography consumes the screen and pushes all proof or actions behind a non-scrolling boundary;
- the implementation obtains a visual pass with transform scaling, hidden overflow, unreadably tight line height, or tiny supporting copy;
- a mobile repair only stacks the desktop layout and creates a title-dominated first screen with no orientation or action.

## Repair and retest

Repair in this order: remove nonessential entry content, tighten excessive spacing, select a smaller discrete title step or safer measure, recompose media and secondary proof, then allow content-driven height. Retest the longest real content at both stress profiles and immediately around every relevant width breakpoint.

At 200 percent text zoom, do not require the same one-screen composition. Require natural reflow, available scrolling, visible focus, and no clipped or unreachable content.

Record what was inspected and whether the result came from source review, manual rendering, or an existing automated browser check. Do not claim a rendered pass from this prose alone.
