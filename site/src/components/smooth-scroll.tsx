"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;

    const syncMotionPreference = () => {
      lenis?.destroy();
      lenis = reducedMotion.matches
        ? null
        : new Lenis({
            anchors: true,
            autoRaf: true,
            lerp: 0.12,
            stopInertiaOnNavigate: true,
          });
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
      lenis?.destroy();
    };
  }, []);

  return null;
}
