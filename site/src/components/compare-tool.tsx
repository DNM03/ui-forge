"use client";

import { Check, CircleAlert, Lightbulb } from "lucide-react";
import { useState } from "react";

import type { CatalogItem } from "@/lib/content";
import { kindLabels } from "@/lib/labels";

function ComparisonColumn({ item }: { item: CatalogItem }) {
  return (
    <article className="comparison-column">
      <header><span>{kindLabels[item.kind]}</span><h2>{item.title}</h2><p>{item.summary}</p></header>
      <section><h3>Intent</h3><p>{item.intent}</p></section>
      <section><h3><Check size={16} aria-hidden="true" />Checks</h3><ul>{item.checks.map((value) => <li key={value}>{value}</li>)}</ul></section>
      <section><h3><CircleAlert size={16} aria-hidden="true" />Warnings</h3><ul>{item.warnings.map((value) => <li key={value}>{value}</li>)}</ul></section>
      <section><h3><Lightbulb size={16} aria-hidden="true" />Exceptions</h3><ul>{item.exceptions.map((value) => <li key={value}>{value}</li>)}</ul></section>
    </article>
  );
}

export function CompareTool({ items }: { items: CatalogItem[] }) {
  const [leftId, setLeftId] = useState("design-read");
  const [rightId, setRightId] = useState("macrostructure-first");
  const left = items.find((item) => item.id === leftId) ?? items[0];
  const right = items.find((item) => item.id === rightId) ?? items[1] ?? items[0];
  if (!left || !right) return null;

  return (
    <section className="compare-workspace">
      <div className="compare-selectors">
        <label><span>First entry</span><select value={leftId} onChange={(event) => setLeftId(event.target.value)}>{items.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
        <span className="compare-vs" aria-hidden="true">VS</span>
        <label><span>Second entry</span><select value={rightId} onChange={(event) => setRightId(event.target.value)}>{items.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      </div>
      {left.id === right.id ? <p className="inline-notice"><CircleAlert size={16} aria-hidden="true" />Choose two different entries to make the comparison useful.</p> : null}
      <div className="comparison-grid"><ComparisonColumn item={left} /><ComparisonColumn item={right} /></div>
    </section>
  );
}
