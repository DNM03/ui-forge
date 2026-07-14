import { describe, expect, it } from "vitest";

import { buildManifest } from "../src/content.js";

describe("canonical content", () => {
  it("builds a complete deterministic manifest", async () => {
    const first = await buildManifest();
    const second = await buildManifest();

    expect(first.docs).toHaveLength(10);
    expect(first.catalog.length).toBeGreaterThanOrEqual(40);
    expect(first.sourceDigest).toBe(second.sourceDigest);
    expect(new Set(first.catalog.map((item) => item.id)).size).toBe(first.catalog.length);
    expect(first.search).toHaveLength(first.docs.length + first.catalog.length);
    expect(first.search.every((record) => new Set(record.tags).size === record.tags.length)).toBe(true);
  });
});
