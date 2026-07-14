import { describe, expect, it } from "vitest";

import type { SearchRecord } from "../src/lib/content";
import { searchRecords } from "../src/lib/search";

const records: SearchRecord[] = [
  {
    id: "pattern:macrostructure-first",
    type: "pattern",
    title: "Macrostructure First",
    summary: "Choose structure before components.",
    body: "Composition and hierarchy guidance.",
    tags: ["composition"],
    url: "/catalog/pattern/macrostructure-first/",
  },
  {
    id: "doc:accessibility",
    type: "doc",
    title: "Responsive and accessibility",
    summary: "Keyboard, contrast, reflow, and input guidance.",
    body: "Visible focus and semantic controls.",
    tags: ["accessibility", "keyboard"],
    url: "/docs/accessibility/",
  },
];

describe("searchRecords", () => {
  it("matches all normalized query terms", () => {
    expect(searchRecords(records, "visible keyboard").map((record) => record.id)).toEqual(["doc:accessibility"]);
  });

  it("filters by type", () => {
    expect(searchRecords(records, "", "pattern").map((record) => record.id)).toEqual(["pattern:macrostructure-first"]);
  });

  it("ranks title matches before body matches", () => {
    expect(searchRecords(records, "accessibility")[0]?.id).toBe("doc:accessibility");
  });
});
