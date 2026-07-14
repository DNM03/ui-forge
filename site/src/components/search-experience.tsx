"use client";

import { ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import type { SearchRecord } from "@/lib/content";
import { kindLabels } from "@/lib/labels";
import { searchRecords } from "@/lib/search";

const typeOptions = ["all", "doc", "pattern", "anti-pattern", "quality-gate", "product-guide", "stack-guide"] as const;

function typeLabel(type: (typeof typeOptions)[number]) {
  if (type === "all") return "All content";
  if (type === "doc") return "References";
  return kindLabels[type];
}

export function SearchExperience({ records }: { records: SearchRecord[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof typeOptions)[number]>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchRecords(records, query, type), [query, records, type]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="search-workspace" aria-label="Search UI Forge">
      <div className="search-controls">
        <label className="search-field search-field-large">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search references and catalog</span>
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search composition, accessibility, Next.js..." autoFocus />
          {query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={16} aria-hidden="true" /></button> : <kbd>/</kbd>}
        </label>
        <label className="select-field select-field-wide">
          <span className="sr-only">Content type</span>
          <select value={type} onChange={(event) => setType(event.target.value as (typeof typeOptions)[number])}>
            {typeOptions.map((option) => <option key={option} value={option}>{typeLabel(option)}</option>)}
          </select>
        </label>
      </div>
      <p className="search-status" aria-live="polite">{results.length} results{query ? ` for “${query}”` : ""}</p>
      <div className="search-results">
        {results.map((record) => (
          <Link key={record.id} href={record.url}>
            <span className="search-result-type">{typeLabel(record.type)}</span>
            <strong>{record.title}</strong>
            <p>{record.summary}</p>
            <span className="tag-list">{record.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
