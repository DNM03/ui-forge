import { ArrowRight, Check, ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CatalogRow } from "@/components/catalog-row";
import { DesignReadWorkbench } from "@/components/design-read-workbench";
import { InstallCommand } from "@/components/install-command";
import { manifest } from "@/lib/content";

const workflow = [
  ["01", "Read context", "Resolve constraints, behavior, audience, outcome, and foundation."],
  ["02", "Route the work", "Choose the task mode, product surface, contextual dials, and stack."],
  ["03", "Compose first", "Select macrostructure and a structural fingerprint before components."],
  ["04", "Build the path", "Implement the real workflow with complete states and responsive behavior."],
  ["05", "Prove quality", "Run hard delivery gates, then inspect product fit with evidence."],
];

const modes = [
  ["Build", "Start from the outcome, then choose structure and system."],
  ["Redesign", "Preserve behavior. Correct the actual visual failure."],
  ["Audit", "Find blocking defects before proposing a new direction."],
];

export default function Home() {
  const blocking = manifest.catalog.filter((item) => item.kind === "quality-gate" && item.level === "blocking");
  const featured = ["design-read", "macrostructure-first", "mobile-recomposition"]
    .map((id) => manifest.catalog.find((item) => item.id === id))
    .filter((item) => item !== undefined);

  return (
    <div className="showcase-home">
      <section className="showcase-hero">
        <Image
          className="showcase-hero-image"
          src="/images/ui-forge-material-study.jpg"
          alt="Layered interface proofs, translucent paper, a cobalt ruler, and a vermilion annotation strip"
          fill
          priority
          sizes="100vw"
        />
        <div className="showcase-hero-content">
          <p className="release-line"><span /> UI Forge 1.0 / npx skill</p>
          <h1><span>UI</span> Forge</h1>
          <p className="showcase-deck">Install the skill.<br /><em>Forge the interface.</em></p>
          <p className="showcase-intro">Add UI Forge to your agent and route frontend work through context-aware composition, implementation guidance, and hard delivery gates.</p>
          <InstallCommand />
          <div className="showcase-actions">
            <Link className="button button-primary" href="/docs/routing-and-precedence/">Read the method <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="button" href="/catalog/">Browse the system <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="material-caption"><span>Material study</span><code>UIF / 001</code></div>
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <p className="section-code">01 / LIVE ROUTING</p>
          <h2>One system.<br /><em>Three ways in.</em></h2>
          <p className="proof-intro">The task changes the route. The principles do not.</p>
          <ol className="mode-index">
            {modes.map(([title, text], index) => (
              <li key={title}><code>0{index + 1}</code><span><strong>{title}</strong><small>{text}</small></span></li>
            ))}
          </ol>
        </div>
        <DesignReadWorkbench />
      </section>

      <section className="editorial-statement">
        <p className="section-code">02 / PRECEDENCE</p>
        <h2>Escape <em>the generic</em><br />without breaking<br /><span>the product.</span></h2>
        <div className="statement-notes">
          <p><strong>Correctness first.</strong> User requirements, semantics, accessibility, and platform behavior resolve before novelty.</p>
          <Link href="/docs/routing-and-precedence/">Open the resolver <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="system-index">
        <header className="system-index-heading">
          <div><p className="section-code">03 / WORKING SYSTEM</p><h2>From context to evidence</h2></div>
          <p>Ten references and forty-two structured decisions, routed by the work in front of you.</p>
        </header>

        <div className="corpus-ledger" aria-label="Corpus summary">
          <div><span>References</span><strong>{manifest.docs.length}</strong></div>
          <div><span>Catalog entries</span><strong>{manifest.catalog.length}</strong></div>
          <div><span>Blocking gates</span><strong>{blocking.length}</strong></div>
          <div><span>Search records</span><strong>{manifest.search.length}</strong></div>
        </div>

        <ol className="process-index">
          {workflow.map(([number, title, text]) => (
            <li key={number}>
              <code>{number}</code><strong>{title}</strong><p>{text}</p><Check size={17} aria-hidden="true" />
            </li>
          ))}
        </ol>
        <Link className="section-entry" href="/docs/">Open the reference index <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="quality-showcase">
        <div className="quality-manifesto">
          <p className="section-code">04 / HARD FLOOR</p>
          <h2>Proof before <em>polish.</em></h2>
          <p>A UI is not done when it looks finished. It is done when the primary path survives inspection.</p>
          <Link href="/quality-gates/">Inspect every gate <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="gate-index">
          {blocking.slice(0, 6).map((gate, index) => (
            <Link key={gate.id} href={`/catalog/quality-gate/${gate.id}/`}>
              <code>0{index + 1}</code><ShieldAlert size={17} aria-hidden="true" />
              <span><strong>{gate.title}</strong><small>{gate.summary}</small></span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-index">
        <header className="system-index-heading">
          <div><p className="section-code">05 / SELECTED PATTERNS</p><h2>High-leverage decisions</h2></div>
          <Link href="/catalog/pattern/">All patterns <ArrowRight size={16} aria-hidden="true" /></Link>
        </header>
        <div className="catalog-list">{featured.map((item) => <CatalogRow key={item.id} item={item} showKind={false} />)}</div>
      </section>
    </div>
  );
}
