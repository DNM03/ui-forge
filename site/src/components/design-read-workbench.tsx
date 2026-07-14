"use client";

import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const surfaces = ["Product", "Data", "Editorial", "Campaign"] as const;
const modes = ["Build", "Redesign", "Audit"] as const;

const routes = {
  Product: { label: "SaaS & operations", href: "/catalog/product-guide/saas-operations/" },
  Data: { label: "Data & analytics", href: "/catalog/product-guide/data-analytics/" },
  Editorial: { label: "Editorial & portfolio", href: "/catalog/product-guide/editorial-portfolio/" },
  Campaign: { label: "Campaign & brand", href: "/catalog/product-guide/campaign-brand/" },
};

function dialLabel(value: number, low: string, mid: string, high: string) {
  if (value <= 3) return low;
  if (value <= 6) return mid;
  return high;
}

export function DesignReadWorkbench() {
  const [surface, setSurface] = useState<(typeof surfaces)[number]>("Product");
  const [mode, setMode] = useState<(typeof modes)[number]>("Redesign");
  const [variance, setVariance] = useState(6);
  const [motion, setMotion] = useState(2);
  const [density, setDensity] = useState(7);

  const read = useMemo(() => ({
    variance: dialLabel(variance, "conventional", "structured", "expressive"),
    motion: dialLabel(motion, "restrained", "responsive", "choreographed"),
    density: dialLabel(density, "spacious", "balanced", "compact"),
  }), [density, motion, variance]);

  return (
    <section className="design-bench" aria-labelledby="design-bench-title">
      <header className="bench-header">
        <div>
          <SlidersHorizontal size={17} aria-hidden="true" />
          <span id="design-bench-title">Design read</span>
        </div>
        <code>LIVE / 01</code>
      </header>

      <div className="bench-controls">
        <fieldset>
          <legend>Surface</legend>
          <div className="bench-segments">
            {surfaces.map((value) => <button key={value} type="button" aria-pressed={surface === value} onClick={() => setSurface(value)}>{value}</button>)}
          </div>
        </fieldset>
        <fieldset>
          <legend>Task mode</legend>
          <div className="bench-segments bench-segments-three">
            {modes.map((value) => <button key={value} type="button" aria-pressed={mode === value} onClick={() => setMode(value)}>{value}</button>)}
          </div>
        </fieldset>

        <div className="bench-dials">
          {[
            ["Variance", variance, setVariance],
            ["Motion", motion, setMotion],
            ["Density", density, setDensity],
          ].map(([label, value, setter]) => (
            <label key={label as string}>
              <span><strong>{label as string}</strong><output>{value as number}/10</output></span>
              <input type="range" min="1" max="10" value={value as number} onChange={(event) => (setter as (next: number) => void)(Number(event.target.value))} />
            </label>
          ))}
        </div>
      </div>

      <div className="bench-output" aria-live="polite">
        <p>Current route</p>
        <strong>{surface} / {mode}</strong>
        <span>{read.variance} variance · {read.motion} motion · {read.density} density</span>
        <div>
          <Link href={routes[surface].href}>{routes[surface].label}<ArrowUpRight size={15} aria-hidden="true" /></Link>
          <Link href="/docs/composition/">Composition system<ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
