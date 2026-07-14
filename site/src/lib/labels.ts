import type { CatalogKind, CatalogLevel } from "./content";

export const kindLabels: Record<CatalogKind, string> = {
  pattern: "Patterns",
  "anti-pattern": "Anti-patterns",
  "quality-gate": "Quality gates",
  "product-guide": "Product guides",
  "stack-guide": "Stack guides",
};

export const kindDescriptions: Record<CatalogKind, string> = {
  pattern: "Reusable decision and implementation structures.",
  "anti-pattern": "Warning signals with explicit contexts and exceptions.",
  "quality-gate": "Evidence-backed requirements for delivery.",
  "product-guide": "Guidance routed by product surface and audience.",
  "stack-guide": "Implementation checks for established frontend stacks.",
};

export const levelLabels: Record<CatalogLevel, string> = {
  blocking: "Blocking",
  recommended: "Recommended",
  contextual: "Contextual",
};
