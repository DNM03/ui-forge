---
title: Responsive and accessibility
summary: Treat WCAG-oriented semantics, keyboard access, contrast, reflow, and input modes as delivery requirements.
order: 40
---

## Accessibility floor

Target WCAG 2.2 AA unless the product has a stricter requirement. Accessibility is part of the component contract, not a final visual polish pass.

## Semantics and names

- Use native landmarks, headings, buttons, links, inputs, tables, lists, and dialogs before custom roles.
- Keep heading order logical and provide one clear page title.
- Give every control a programmatic name that matches its visible label.
- Associate help and error text with the relevant field.
- Announce meaningful async results without moving focus unnecessarily.
- Preserve names, roles, values, and state in custom components.

## Keyboard and focus

Every interactive path must work without a pointer. Keep DOM order aligned with visual and reading order. Show a high-contrast `:focus-visible` indicator and ensure sticky headers, dialogs, and drawers do not obscure it.

Move focus only when a new context requires it, such as opening a modal or completing a routed step. Restore focus to the invoking control when a temporary layer closes.

## Contrast and cues

Meet at least 4.5:1 for normal text and 3:1 for large text. Interactive component boundaries and meaningful graphics need 3:1 against adjacent colors where WCAG requires it. Pair color with text, icon, pattern, or position for state meaning.

Validate the rendered composite for every reachable state when a local render is practical: default, hover on hover-capable devices, active, focus-visible, selected, disabled, error, success, and high-contrast contexts when supported. A foreground token that passes on the default surface may fail after a hover or selected background changes. If no render is available, review the state styles statically and report that limitation instead of forcing browser automation.

## Reflow and zoom

Verify content at 320 CSS pixels wide and 200 percent text zoom without loss of content or two-dimensional scrolling except where the content inherently requires it, such as a data table or canvas. Long words, localized labels, validation messages, and code must wrap or scroll within bounded regions. Inspect line quality as well as overflow: body copy should retain a usable measure, headings should not gain accidental extra lines, and actions should not split into incoherent fragments.

## Targets and input modes

Meet WCAG 2.2 minimum target spacing requirements and prefer at least 44 by 44 CSS pixels for primary touch controls. Do not rely on hover. Provide pointer, touch, and keyboard equivalents; provide a non-drag alternative for drag interactions.

## Responsive evidence

Test representative narrow mobile, wide mobile or tablet, and desktop widths. Inspect landscape where the workflow or fixed chrome makes height important. Check navigation, primary task, forms, tables, dialogs, toasts, long content, and all state variants for overlap and overflow.
