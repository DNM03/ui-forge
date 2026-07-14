import matter from "gray-matter";
import type { Root } from "mdast";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified, type Plugin } from "unified";
import { visit } from "unist-util-visit";

import type { DocHeading, GeneratedDoc } from "./types.js";

interface MarkdownFrontmatter {
  title: string;
  summary: string;
  order: number;
}

interface MdNode {
  type: string;
  value?: string;
  url?: string;
  depth?: number;
  children?: MdNode[];
  data?: {
    hProperties?: Record<string, string>;
  };
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function textFromNode(node: MdNode): string {
  if (typeof node.value === "string") return node.value;
  return (node.children ?? []).map(textFromNode).join("");
}

export function assertSafeUrl(url: string): void {
  const trimmed = url.trim();
  if (trimmed.startsWith("#") || trimmed.startsWith("/") || trimmed.startsWith("./") || trimmed.startsWith("../")) {
    return;
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new Error(`Invalid Markdown URL: ${url}`);
  }

  if (!new Set(["https:", "mailto:"]).has(parsed.protocol)) {
    throw new Error(`Unsafe Markdown URL protocol: ${parsed.protocol}`);
  }
}

function parseFrontmatter(input: string, sourceName: string): { data: MarkdownFrontmatter; content: string } {
  const parsed = matter(input);
  const keys = Object.keys(parsed.data).sort();
  const expected = ["order", "summary", "title"];

  if (JSON.stringify(keys) !== JSON.stringify(expected)) {
    throw new Error(`${sourceName} frontmatter must contain only title, summary, and order`);
  }

  const { title, summary, order } = parsed.data as Record<string, unknown>;
  if (typeof title !== "string" || title.length < 3) throw new Error(`${sourceName} has an invalid title`);
  if (typeof summary !== "string" || summary.length < 20) throw new Error(`${sourceName} has an invalid summary`);
  if (!Number.isInteger(order)) throw new Error(`${sourceName} has an invalid order`);

  return { data: { title, summary, order: order as number }, content: parsed.content };
}

export async function compileMarkdown(input: string, sourceName: string): Promise<Omit<GeneratedDoc, "slug">> {
  const { data, content } = parseFrontmatter(input, sourceName);
  const headings: DocHeading[] = [];
  const textParts: string[] = [];
  const usedHeadingIds = new Map<string, number>();

  const inspectMarkdown: Plugin<[], Root> = () => (tree) => {
    visit(tree, (untypedNode) => {
      const node = untypedNode as unknown as MdNode;
      if (node.type === "html") throw new Error(`${sourceName} contains forbidden raw HTML`);
      if ((node.type === "link" || node.type === "image") && node.url) assertSafeUrl(node.url);
      if (node.type === "text" && node.value) textParts.push(node.value);

      if (node.type === "heading" && node.depth) {
        const text = textFromNode(node).trim();
        const baseId = slugify(text) || "section";
        const count = usedHeadingIds.get(baseId) ?? 0;
        usedHeadingIds.set(baseId, count + 1);
        const rawId = count === 0 ? baseId : `${baseId}-${count + 1}`;
        node.data = { ...(node.data ?? {}), hProperties: { id: rawId } };
        headings.push({ depth: node.depth, id: `user-content-${rawId}`, text });
      }
    });
  };

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(inspectMarkdown)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify);
  const html = String(await processor.process(content));

  return {
    ...data,
    html,
    headings,
    plainText: textParts.join(" ").replace(/\s+/g, " ").trim(),
  };
}
