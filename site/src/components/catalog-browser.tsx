"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import type { CatalogItem, CatalogLevel } from "@/lib/content";

import { CatalogRow } from "./catalog-row";

export function CatalogBrowser({ items }: { items: CatalogItem[] }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<"all" | CatalogLevel>("all");

  const filtered = useMemo(() => {
    const term = query.toLowerCase().trim();
    return items.filter((item) => {
      const matchesLevel = level === "all" || item.level === level;
      const haystack = [item.title, item.summary, item.intent, ...item.tags, ...item.appliesTo].join(" ").toLowerCase();
      return matchesLevel && (!term || haystack.includes(term));
    });
  }, [items, level, query]);

  return (
    <section aria-label="Catalog filters">
      <div className="filter-bar">
        <label className="search-field">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search this collection</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, tag, or intent" />
          {query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={15} aria-hidden="true" /></button> : null}
        </label>
        <label className="select-field">
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span className="sr-only">Filter by level</span>
          <select value={level} onChange={(event) => setLevel(event.target.value as "all" | CatalogLevel)}>
            <option value="all">All levels</option>
            <option value="blocking">Blocking</option>
            <option value="recommended">Recommended</option>
            <option value="contextual">Contextual</option>
          </select>
        </label>
        <span className="result-count" aria-live="polite">{filtered.length} of {items.length}</span>
      </div>
      {filtered.length ? <div className="catalog-list">{filtered.map((item) => <CatalogRow key={item.id} item={item} showKind={false} />)}</div> : <div className="empty-state"><strong>No matching entries</strong><p>Change the search phrase or level filter.</p></div>}
    </section>
  );
}
