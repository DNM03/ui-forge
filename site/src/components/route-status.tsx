"use client";

import { ScanLine } from "lucide-react";
import { usePathname } from "next/navigation";

const routeNames: Record<string, string> = {
  "/": "Workbench",
  "/docs/": "Reference index",
  "/catalog/": "Pattern catalog",
  "/quality-gates/": "Delivery gates",
  "/compare/": "Compare entries",
  "/provenance/": "Source record",
  "/search/": "Corpus search",
};

export function RouteStatus() {
  const pathname = usePathname();
  const root = Object.keys(routeNames)
    .filter((route) => route !== "/")
    .find((route) => pathname.startsWith(route));
  const name = pathname === "/" ? routeNames["/"] : routeNames[root ?? "/"];

  return (
    <div className="route-status">
      <ScanLine size={16} aria-hidden="true" />
      <span>UIF / {name}</span>
      <i aria-hidden="true" />
      <code>ONLINE</code>
    </div>
  );
}
