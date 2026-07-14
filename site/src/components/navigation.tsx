"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/docs/", label: "Method", index: "01" },
  { href: "/catalog/", label: "Catalog", index: "02" },
  { href: "/quality-gates/", label: "Gates", index: "03" },
  { href: "/compare/", label: "Compare", index: "04" },
  { href: "/provenance/", label: "Sources", index: "05" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav-list">
      {links.map(({ href, label, index }) => {
        const active = pathname.startsWith(href);
        return (
          <Link key={href} href={href} aria-current={active ? "page" : undefined}>
            <span>{label}</span>
            <code>{index}</code>
          </Link>
        );
      })}
    </nav>
  );
}
