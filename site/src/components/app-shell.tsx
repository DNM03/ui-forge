import { Menu, Search } from "lucide-react";
import Link from "next/link";

import { manifest } from "@/lib/content";

import { Navigation } from "./navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" href="/" aria-label="UI Forge home">
            <span className="brand-mark" aria-hidden="true">UF</span>
            <span><strong>UI Forge</strong><small>Interface craft system</small></span>
          </Link>

          <div className="desktop-navigation"><Navigation /></div>

          <div className="header-actions">
            <span className="corpus-count"><b>{manifest.catalog.length}</b><span>Indexed<br />decisions</span></span>
            <Link className="icon-command" href="/search/" aria-label="Search UI Forge">
              <Search size={17} aria-hidden="true" />
            </Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation"><Menu size={18} aria-hidden="true" /></summary>
              <div className="mobile-menu-panel"><Navigation /></div>
            </details>
          </div>
        </div>
      </header>

      <main id="main-content" className="content-shell">{children}</main>
    </div>
  );
}
