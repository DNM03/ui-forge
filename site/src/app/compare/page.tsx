import type { Metadata } from "next";

import { CompareTool } from "@/components/compare-tool";
import { PageHeader } from "@/components/page-header";
import { manifest } from "@/lib/content";

export const metadata: Metadata = { title: "Compare" };

export default function ComparePage() {
  return (
    <div className="page-stack">
      <PageHeader eyebrow="Decision support" title="Compare entries" description="Place any two patterns, warnings, gates, product guides, or stack guides side by side." />
      <CompareTool items={manifest.catalog} />
    </div>
  );
}
