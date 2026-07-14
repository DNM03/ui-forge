import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/page-header";
import { getDoc, manifest } from "@/lib/content";

export function generateStaticParams() {
  return manifest.docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  return doc ? { title: doc.title, description: doc.summary } : {};
}

export default async function DocDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  const index = manifest.docs.findIndex((item) => item.slug === slug);
  const previous = manifest.docs[index - 1];
  const next = manifest.docs[index + 1];

  return (
    <div className="page-stack">
      <PageHeader eyebrow={`Reference ${String(index + 1).padStart(2, "0")}`} title={doc.title} description={doc.summary} />
      <div className="article-layout">
        <article className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
        <aside className="toc">
          <strong>On this page</strong>
          <nav aria-label="On this page">
            {doc.headings.filter((heading) => heading.depth === 2).map((heading) => (
              <a key={heading.id} href={`#${heading.id}`}>{heading.text}</a>
            ))}
          </nav>
        </aside>
      </div>
      <nav className="article-pagination" aria-label="Reference pagination">
        {previous ? <Link href={`/docs/${previous.slug}/`}><ArrowLeft size={16} aria-hidden="true" /><span><small>Previous</small>{previous.title}</span></Link> : <span />}
        {next ? <Link href={`/docs/${next.slug}/`}><span><small>Next</small>{next.title}</span><ArrowRight size={16} aria-hidden="true" /></Link> : <span />}
      </nav>
    </div>
  );
}
