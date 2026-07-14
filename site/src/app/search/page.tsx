import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SearchExperience } from "@/components/search-experience";
import { manifest } from "@/lib/content";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <div className="page-stack">
      <PageHeader eyebrow={`${manifest.search.length} indexed records`} title="Search" description="Search the canonical references and every structured catalog entry." />
      <SearchExperience records={manifest.search} />
    </div>
  );
}
