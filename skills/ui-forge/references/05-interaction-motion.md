---
title: Interaction and motion
summary: Design complete state feedback, interruptible transitions, gestures, and reduced-motion behavior.
order: 50
---

## State matrix

For each interactive component, consider default, hover when available, pressed, selected, focus-visible, disabled, loading, error, success, and empty behavior. Not every state needs a separate visual treatment, but every reachable state needs a coherent outcome.

Keep labels and dimensions stable through state changes. Use progress text or indicators that do not make the surrounding layout jump. Disabled states must remain legible and should be used only when the reason is apparent.

## Feedback timing

Provide immediate visual acknowledgement for input. For longer operations, show bounded progress or a truthful indeterminate state, retain context, and offer cancellation when the operation is costly or reversible.

Errors should appear near the cause, explain what happened in plain language, preserve user input, and provide a recovery path. Success feedback should confirm the result without trapping focus or blocking continued work.

## Motion purpose

Use motion to explain state change, spatial relationship, hierarchy, or causality. Prefer opacity and transform for simple effects. Avoid animating layout when a stable alternative exists.

Do not use `transition: all`, universal hover scale, bounce easing, cursor followers, repeated scroll reveals, or parallax by default. These may be valid for an expressive experience only when they reinforce the chosen direction and remain controllable.

## Expressive motion signature

For branded public, launch, editorial, portfolio, event, and other expressive surfaces, choose one visible motion signature during art direction rather than adding animation after the layout is complete. It may reveal or reposition the subject, transition a crop, assemble an artifact, move an editorial phrase, progress a sequence, or give a meaningful selector a distinctive state change.

The signature should be noticeable in ordinary use without requiring the visitor to search for it. It should reinforce the page's central move, run smoothly, and yield immediately to user input. Subtle ambient light, grain, or a background sweep may support the system but does not count as the signature by itself.

Use staged entrance motion only when it improves the first reading. Keep content visible by default and enable enhanced reveals from JavaScript so failure, printing, screenshot capture, or reduced motion does not leave major regions transparent.

## Reduced motion

Respect `prefers-reduced-motion: reduce`. Remove nonessential travel, parallax, autoplay, and repeated animation. Preserve necessary state feedback with instant changes, color, border, or short fades. Never make reduced-motion mode less functional.

## Layers and focus

Dialogs and drawers need a labeled title, focus containment where appropriate, Escape handling, sensible initial focus, background interaction prevention, and focus restoration. Popovers and menus need predictable dismissal and arrow-key behavior when the chosen primitive requires it.

## Gestures

Provide explicit controls for swipe, pinch, or drag outcomes. Avoid gesture-only destructive actions. Make cancellation and undo available when practical.
