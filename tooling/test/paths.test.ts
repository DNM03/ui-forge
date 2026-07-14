import path from "node:path";

import { describe, expect, it } from "vitest";

import { resolveInside } from "../src/paths.js";

describe("resolveInside", () => {
  it("resolves a child path", () => {
    expect(resolveInside("/tmp/ui-forge", "docs/file.md")).toBe(path.resolve("/tmp/ui-forge/docs/file.md"));
  });

  it("rejects parent traversal", () => {
    expect(() => resolveInside("/tmp/ui-forge", "../secret.txt")).toThrow("escapes allowed root");
  });

  it("rejects an absolute escape", () => {
    expect(() => resolveInside("/tmp/ui-forge", "/etc/passwd")).toThrow("escapes allowed root");
  });
});
