import type { Metadata } from "next";

import { AppShell } from "@/components/app-shell";

import "./globals.css";
import "./showcase.css";

export const metadata: Metadata = {
  title: {
    default: "UI Forge",
    template: "%s | UI Forge",
  },
  description: "Context-aware interface design guidance, patterns, quality gates, and implementation references.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
