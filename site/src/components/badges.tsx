import type { CatalogKind, CatalogLevel } from "@/lib/content";
import { kindLabels, levelLabels } from "@/lib/labels";

export function KindBadge({ kind }: { kind: CatalogKind }) {
  return <span className="badge badge-kind">{kindLabels[kind]}</span>;
}

export function LevelBadge({ level }: { level: CatalogLevel }) {
  return <span className={`badge badge-${level}`}>{levelLabels[level]}</span>;
}
