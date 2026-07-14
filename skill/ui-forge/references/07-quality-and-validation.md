---
title: Quality and validation
summary: Verify correctness, accessibility, responsive behavior, and design quality with explicit evidence.
order: 70
---

## Evidence ladder

Prefer evidence in this order:

1. Automated tests and build output for deterministic behavior.
2. Browser inspection of the actual rendered state.
3. Static inspection of semantics, styles, and source paths.
4. Reasoned inference, clearly labeled as unverified.

Do not report a viewport, contrast, keyboard, performance, or screen-reader pass based only on prose review.

## Blocking findings

Stop delivery for broken primary behavior, inaccessible core paths, missing control names, invisible focus, unreadable contrast, content overlap, unintended overflow, fabricated evidence, destructive actions without recovery, missing real error paths, motion that blocks input, or silent removal of required product behavior.

## Major findings

Treat inconsistent state behavior, confusing hierarchy, inaccessible secondary paths, weak responsive recomposition, unstable layout, missing empty states, and performance-heavy decoration as major unless the affected surface is unreachable.

## Contextual critique

Review six dimensions:

- composition and hierarchy;
- typography and content rhythm;
- color, surfaces, and contrast;
- interaction and motion;
- responsive behavior and density;
- authenticity, assets, and product fit.

Use anti-patterns to locate weak decisions, then judge them against the Design Read. Do not fail a purposeful convention merely because it resembles a catalog warning.

## Front-door and rhythm review

For public, branded, editorial, or showcase surfaces, inspect the full page in addition to individual viewports:

- The first viewport makes the name, category, or literal offer unmistakable and leaves a visible hint of what follows.
- A real control, output, artifact, or worked example proves the proposition near the entry.
- Global navigation is proportional to the number and importance of destinations.
- Adjacent sections do not repeat the same alignment, density, card grid, or split layout without purpose.
- Display typography appears only at true editorial moments and does not leak into compact tools or reference rows.
- Media reveals the actual product, output, object, place, or state; atmosphere remains secondary.
- The final mobile composition preserves identity, proof, action order, and readable media rather than merely stacking desktop blocks.

## Regression guards

Use these checks before calling a visual redesign complete:

| Risk | Guard | Required evidence |
| --- | --- | --- |
| Reference tracing | Preserve selected principles, but change the product shell, navigation geometry, or composition enough to create a distinct silhouette. | Side-by-side or thumbnail comparison with each studied reference. |
| State contrast drift | Set every foreground and icon color explicitly when a state changes its background. | Browser-applied hover, active, focus, selected, and disabled states scanned or measured in their rendered composites. |
| Pathological wrapping | Avoid hard breaks in ordinary copy and reject body text that collapses into one- or two-word lines. Keep short actions intact when the supported width allows it. | Screenshots at narrow mobile, desktop, and the breakpoint immediately before and after recomposition. |
| Bleed/container mismatch | Specify background extent and content extent independently. Do not reuse viewport gutter calculations inside constrained children. | Computed section and shared-container `x` positions and widths at wide desktop, tablet, and mobile; document width equals viewport width. |
| Incidental alignment | Declare alignment for repeated values, labels, icons, and controls instead of inheriting layout defaults. | Rendered bounding boxes or an overlay showing intended centers, baselines, or column edges. |

A static screenshot of the default desktop state is not enough evidence for any of these guards.

## Browser matrix

At minimum inspect one narrow mobile width and one desktop width. Add tablet, wide desktop, short landscape, zoom, and multiple browsers when the component risk justifies them. Test primary navigation, core action, search or filtering, modal layers, errors, empty states, long labels, and long content.

## Completion report

State what changed, which checks ran, what they proved, and any remaining risk. Separate successful automated results from visual inspection. If a check could not run, say so directly.
