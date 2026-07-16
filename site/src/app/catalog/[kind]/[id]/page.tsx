import { ArrowLeft, Check, CircleAlert, Lightbulb, Quote } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { KindBadge, LevelBadge } from "@/components/badges";
import { PageHeader } from "@/components/page-header";
import { catalogKinds, getCatalogItem, manifest, type CatalogKind } from "@/lib/content";
import { kindLabels } from "@/lib/labels";

export function generateStaticParams() {
  return manifest.catalog.map((item) => ({ kind: item.kind, id: item.id }));
}

function isCatalogKind(value: string): value is CatalogKind {
  return catalogKinds.includes(value as CatalogKind);
}

export async function generateMetadata({ params }: { params: Promise<{ kind: string; id: string }> }): Promise<Metadata> {
  const { kind, id } = await params;
  const item = isCatalogKind(kind) ? getCatalogItem(kind, id) : undefined;
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function CatalogDetailPage({ params }: { params: Promise<{ kind: string; id: string }> }) {
  const { kind, id } = await params;
  if (!isCatalogKind(kind)) notFound();
  const item = getCatalogItem(kind, id);
  if (!item) notFound();

  return (
    <div className="page-stack">
      <Link className="back-link" href={`/catalog/${kind}/`}><ArrowLeft size={15} aria-hidden="true" />Back to {kindLabels[kind].toLowerCase()}</Link>
      <PageHeader eyebrow={item.id} title={item.title} description={item.summary} actions={<div className="badge-row"><KindBadge kind={item.kind} /><LevelBadge level={item.level} /></div>} />

      <div className="detail-grid">
        <section className="detail-main">
          <div className="intent-block"><Quote size={18} aria-hidden="true" /><div><p className="eyebrow">Intent</p><p>{item.intent}</p></div></div>
          <section className="detail-section">
            <h2><Check size={18} aria-hidden="true" />Checks</h2>
            <ul className="check-list">{item.checks.map((check) => <li key={check}>{check}</li>)}</ul>
          </section>
          {item.warnings.length ? <section className="detail-section warning-section"><h2><CircleAlert size={18} aria-hidden="true" />Warnings</h2><ul>{item.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul></section> : null}
          {item.exceptions.length ? <section className="detail-section"><h2><Lightbulb size={18} aria-hidden="true" />Exceptions</h2><ul>{item.exceptions.map((exception) => <li key={exception}>{exception}</li>)}</ul></section> : null}
        </section>
        <aside className="detail-aside">
          <div><strong>Applies to</strong><div className="tag-list">{item.appliesTo.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <div><strong>Tags</strong><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </aside>
      </div>
    </div>
  );
}
