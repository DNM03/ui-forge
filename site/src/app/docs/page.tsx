import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { manifest } from "@/lib/content";

export const metadata: Metadata = { title: "References" };

export default function DocsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Canonical corpus"
        title="References"
        description="Ten focused guides loaded on demand by the UI Forge skill and rendered here from the same canonical files."
      />
      <div className="doc-index">
        {manifest.docs.map((doc, index) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}/`}>
            <span className="doc-index-number">{String(index + 1).padStart(2, "0")}</span>
            <span><strong>{doc.title}</strong><small>{doc.summary}</small></span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
