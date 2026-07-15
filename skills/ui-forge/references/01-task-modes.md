---
title: Task modes
summary: Adapt inputs, outputs, and verification to greenfield, implementation, redesign, audit, and component work.
order: 10
---

## Greenfield

Establish the smallest usable product surface first. Decide the primary workflow, content model, states, route structure, foundation, and responsive contract. For a full page, form three materially different visual directions and commit to one whole-page macrostructure, central move, aesthetic system, and section rhythm before detailed styling. Build the actual requested experience as the first screen; add explanatory or promotional framing only when it belongs to the product.

Output a working vertical slice with real state behavior and a deliberately bounded token system. Do not substitute an audit report for generation.

## Existing implementation

Read the route, nearby components, shared primitives, styles, data flow, tests, and repository instructions. List what must remain compatible: exports, props, routes, analytics hooks, semantics, and state transitions.

Make scoped edits that follow existing patterns. Avoid new abstractions unless they remove real duplication or match a local ownership boundary.

## Redesign

Separate visual problems from functional ones. Inventory content, controls, states, data, navigation, brand assets, and behavior that must survive. Identify the actual failure: hierarchy, density, composition, typography, discoverability, consistency, accessibility, or trust.

Change the smallest layers that solve the failure. Preserve working behavior and content unless the user explicitly asks to replace them. Compare before and after at identical viewports and states.

## Audit

Lead with findings ordered by severity. Each finding needs location, evidence, user impact, and a concrete fix. Distinguish:

- blocking correctness or accessibility failures;
- major workflow or responsive regressions;
- consistency and maintainability risks;
- contextual visual-quality opportunities.

Do not claim a pass for a state, viewport, or interaction that was not inspected.

## Component

Inherit type, spacing, color, icon, radius, motion, and state conventions from the containing product. Define a stable size contract. Implement the full expected state matrix without inventing page navigation, hero sections, or unrelated layout.

## Study or reference recreation

Extract transferable traits rather than copying brand identity or exact assets. Record composition, scale contrast, rhythm, image treatment, action voice, surface logic, and motion behavior. Recombine those traits for the target product and preserve attribution where source material is substantially reused.
