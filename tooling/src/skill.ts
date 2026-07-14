import { readFile } from "node:fs/promises";

import matter from "gray-matter";
import YAML from "yaml";

import { resolveInside, skillRoot } from "./paths.js";

export async function validateSkill(): Promise<void> {
  const skillPath = resolveInside(skillRoot, "SKILL.md");
  const agentPath = resolveInside(skillRoot, "agents/openai.yaml");
  const parsed = matter(await readFile(skillPath, "utf8"));
  const frontmatterKeys = Object.keys(parsed.data).sort();

  if (JSON.stringify(frontmatterKeys) !== JSON.stringify(["description", "name"])) {
    throw new Error("SKILL.md frontmatter must contain only name and description");
  }
  if (parsed.data.name !== "ui-forge") throw new Error("Skill name must be ui-forge");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parsed.data.name)) throw new Error("Skill name is not kebab-case");
  if (typeof parsed.data.description !== "string" || parsed.data.description.length < 80 || parsed.data.description.length > 1024) {
    throw new Error("Skill description must be specific and between 80 and 1024 characters");
  }
  if (parsed.content.split("\n").length > 500) throw new Error("SKILL.md exceeds 500 lines");
  if (/\bTODO\b/.test(parsed.content)) throw new Error("SKILL.md contains unresolved TODO text");

  const agent = YAML.parse(await readFile(agentPath, "utf8")) as {
    interface?: { display_name?: unknown; short_description?: unknown; default_prompt?: unknown };
    policy?: { allow_implicit_invocation?: unknown };
  };
  const description = agent.interface?.short_description;
  if (typeof description !== "string" || description.length < 25 || description.length > 64) {
    throw new Error("agents/openai.yaml short_description must be 25-64 characters");
  }
  if (typeof agent.interface?.default_prompt !== "string" || !agent.interface.default_prompt.includes("$ui-forge")) {
    throw new Error("agents/openai.yaml default_prompt must mention $ui-forge");
  }
  if (agent.policy?.allow_implicit_invocation !== true) throw new Error("Implicit invocation policy must be explicit");
}
