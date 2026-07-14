import { describe, expect, it } from "vitest";

import { assertSafeUrl, compileMarkdown } from "../src/markdown.js";

const frontmatter = `---\ntitle: Safe document\nsummary: A sufficiently descriptive summary for this test.\norder: 1\n---\n`;

describe("Markdown compiler", () => {
  it("renders safe Markdown and deterministic heading ids", async () => {
    const result = await compileMarkdown(`${frontmatter}\n## Hello world\n\n[Docs](https://example.com).`, "safe.md");
    expect(result.html).toContain('id="user-content-hello-world"');
    expect(result.html).toContain("https://example.com");
    expect(result.headings[0]?.id).toBe("user-content-hello-world");
  });

  it("rejects raw HTML", async () => {
    await expect(compileMarkdown(`${frontmatter}\n<script>alert(1)</script>`, "unsafe.md")).rejects.toThrow("forbidden raw HTML");
  });

  it("rejects unsafe protocols", () => {
    expect(() => assertSafeUrl("javascript:alert(1)")).toThrow("Unsafe Markdown URL protocol");
    expect(() => assertSafeUrl("data:text/html,test")).toThrow("Unsafe Markdown URL protocol");
  });

  it("accepts relative, fragment, HTTPS, and mail links", () => {
    expect(() => assertSafeUrl("./local.md")).not.toThrow();
    expect(() => assertSafeUrl("#section")).not.toThrow();
    expect(() => assertSafeUrl("https://example.com")).not.toThrow();
    expect(() => assertSafeUrl("mailto:team@example.com")).not.toThrow();
  });
});
