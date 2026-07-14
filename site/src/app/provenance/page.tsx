import { ExternalLink, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { manifest } from "@/lib/content";

export const metadata: Metadata = { title: "Provenance" };

export default function ProvenancePage() {
  return (
    <div className="page-stack">
      <PageHeader eyebrow={`Reviewed ${manifest.provenance.reviewedAt}`} title="Provenance" description="Exact source snapshots, official standards, adaptation boundaries, and retained license information." />
      <section className="trust-callout"><ShieldCheck size={22} aria-hidden="true" /><div><h2>Static inspection only</h2><p>No source repository installer, script, CLI, build, test, package command, or server was run. Popularity and stars were not treated as security evidence.</p></div></section>
      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">Authority</p><h2>Official standards</h2></div></div>
        <div className="standard-list">{manifest.provenance.standards.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><span><strong>{source.name}</strong><small>Retrieved {source.retrieved_at}</small></span><ExternalLink size={16} aria-hidden="true" /></a>)}</div>
      </section>
    </div>
  );
}
