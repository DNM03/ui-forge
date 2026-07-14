import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { catalogKinds, getCatalogItems } from "@/lib/content";
import { kindDescriptions, kindLabels } from "@/lib/labels";

export const metadata: Metadata = { title: "Catalog" };

export default function CatalogPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Structured guidance"
        title="Catalog"
        description="Patterns, warnings, delivery gates, product routes, and stack-specific implementation checks with explicit exceptions."
      />
      <div className="kind-grid">
        {catalogKinds.map((kind) => {
          const items = getCatalogItems(kind);
          return (
            <Link key={kind} href={`/catalog/${kind}/`}>
              <span className="kind-count">{String(items.length).padStart(2, "0")}</span>
              <h2>{kindLabels[kind]}</h2>
              <p>{kindDescriptions[kind]}</p>
              <span className="text-link">Open collection <ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
