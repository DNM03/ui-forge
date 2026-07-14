import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { CatalogItem } from "@/lib/content";

import { KindBadge, LevelBadge } from "./badges";

export function CatalogRow({ item, showKind = true }: { item: CatalogItem; showKind?: boolean }) {
  return (
    <Link className="catalog-row" href={`/catalog/${item.kind}/${item.id}/`}>
      <span className="catalog-row-main">
        <span className="catalog-row-meta">
          {showKind ? <KindBadge kind={item.kind} /> : null}
          <LevelBadge level={item.level} />
        </span>
        <strong>{item.title}</strong>
        <span>{item.summary}</span>
      </span>
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
