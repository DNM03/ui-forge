---
title: Quality and validation
summary: Verify UI/UX quality, accessibility, responsive behavior, and correctness with proportionate evidence.
order: 70
---

## Evidence ladder

Prefer evidence in this order:

1. UI/UX review of the actual design decisions: hierarchy, flow, copy, states, density, and product fit.
2. Static inspection of semantics, styles, source paths, and component contracts.
3. Existing project checks for deterministic behavior, such as typecheck, lint, unit tests, or build.
4. Manual rendered inspection when a local render is already practical.
5. Automated browser or end-to-end tests only when the user asks, the project already owns that workflow, or the task is specifically site validation.
6. Reasoned inference, clearly labeled as unverified.

Do not report a viewport, contrast, keyboard, performance, or screen-reader pass based only on prose review.

Do not install or run Playwright as a default part of this skill. Playwright belongs to this repository's optional site testing and to projects that explicitly require e2e validation, not to routine UI/UX design guidance.

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
| Reference tracing | Preserve selected principles, but change the product shell, navigation geometry, or composition enough to create a distinct silhouette. | Side-by-side or thumbnail comparison with each studied reference; static comparison is acceptable. |
| State contrast drift | Set every foreground and icon color explicitly when a state changes its background. | Static state review plus manual rendered inspection when available; automated browser checks are optional. |
| Pathological wrapping | Avoid hard breaks in ordinary copy and reject body text that collapses into one- or two-word lines. Keep short actions intact when the supported width allows it. | Inspect narrow mobile, desktop, and breakpoint-adjacent layouts when practical; otherwise state the review was static. |
| First-viewport height overflow | Budget fixed chrome, required entry content, spacing, and a meaningful next-section content cue before locking display scale or hero height. | Inspect the longest real entry at a short desktop and short mobile height; record viewport height, chrome bottom, required-content bottom, hero boundary, first next-section cue, and whether document scrolling remains available. |
| Bleed/container mismatch | Specify background extent and content extent independently. Do not reuse viewport gutter calculations inside constrained children. | Computed section and shared-container `x` positions and widths at wide desktop, tablet, and mobile; document width equals viewport width. |
| Incidental alignment | Declare alignment for repeated values, labels, icons, and controls instead of inheriting layout defaults. | Rendered bounding boxes or an overlay showing intended centers, baselines, or column edges. |

A default desktop-only review is not enough evidence for any of these guards.

## UI review matrix

At minimum, reason through one narrow mobile layout and one desktop layout. When a local render is already available, manually inspect those sizes. Add tablet, wide desktop, short landscape, zoom, or automated browser tests only when the component risk justifies them or the project already uses that workflow. Review primary navigation, core action, search or filtering, modal layers, errors, empty states, long labels, and long content.

## Completion report

State what changed, which checks ran, what they proved, and any remaining risk. Separate UI/UX review, static inspection, project checks, rendered observations, and automated browser results. If a check did not run, say so directly.
