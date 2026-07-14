import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { CatalogRow } from "@/components/catalog-row";
import { PageHeader } from "@/components/page-header";
import { getCatalogItems } from "@/lib/content";

export const metadata: Metadata = { title: "Quality gates" };

export default function QualityGatesPage() {
  const gates = getCatalogItems("quality-gate");
  const blocking = gates.filter((item) => item.level === "blocking");
  const recommended = gates.filter((item) => item.level !== "blocking");

  return (
    <div className="page-stack">
      <PageHeader eyebrow={`${gates.length} evidence-backed gates`} title="Quality gates" description="Blocking correctness and accessibility requirements first, followed by recommended delivery checks." />
      <section className="section-block gate-group">
        <div className="section-heading"><div><p className="eyebrow danger-text"><AlertTriangle size={14} aria-hidden="true" />Must pass</p><h2>Blocking</h2></div><span>{blocking.length} gates</span></div>
        <div className="catalog-list">{blocking.map((item) => <CatalogRow key={item.id} item={item} showKind={false} />)}</div>
      </section>
      <section className="section-block gate-group">
        <div className="section-heading"><div><p className="eyebrow success-text"><CheckCircle2 size={14} aria-hidden="true" />Delivery confidence</p><h2>Recommended</h2></div><span>{recommended.length} gates</span></div>
        <div className="catalog-list">{recommended.map((item) => <CatalogRow key={item.id} item={item} showKind={false} />)}</div>
      </section>
    </div>
  );
}
