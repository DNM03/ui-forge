import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CatalogBrowser } from "@/components/catalog-browser";
import { PageHeader } from "@/components/page-header";
import { catalogKinds, getCatalogItems, type CatalogKind } from "@/lib/content";
import { kindDescriptions, kindLabels } from "@/lib/labels";

export function generateStaticParams() {
  return catalogKinds.map((kind) => ({ kind }));
}

function isCatalogKind(value: string): value is CatalogKind {
  return catalogKinds.includes(value as CatalogKind);
}

export async function generateMetadata({ params }: { params: Promise<{ kind: string }> }): Promise<Metadata> {
  const { kind } = await params;
  return isCatalogKind(kind) ? { title: kindLabels[kind], description: kindDescriptions[kind] } : {};
}

export default async function CatalogKindPage({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (!isCatalogKind(kind)) notFound();
  const items = getCatalogItems(kind);

  return (
    <div className="page-stack">
      <PageHeader eyebrow={`${items.length} catalog entries`} title={kindLabels[kind]} description={kindDescriptions[kind]} />
      <CatalogBrowser items={items} />
    </div>
  );
}
