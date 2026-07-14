import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import manifest from "../src/generated/manifest.json";

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const geometry = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(geometry.width).toBeLessThanOrEqual(geometry.viewport);
}

test("overview renders the working corpus", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "UI Forge" })).toBeVisible();
  await expect(page.locator(".corpus-ledger").getByText(String(manifest.catalog.length), { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From context to evidence" })).toBeVisible();
  await page.getByRole("button", { name: "Data" }).click();
  await expect(page.locator(".bench-output strong")).toHaveText("Data / Redesign");
  await expectNoHorizontalOverflow(page);

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))).toEqual([]);
});

test("search filters the generated index", async ({ page }) => {
  await page.goto("/search/");
  const search = page.getByRole("textbox", { name: "Search references and catalog" });
  await search.fill("macrostructure");
  await expect(page.getByText(/results for “macrostructure”/)).toBeVisible();
  await expect(page.getByRole("link", { name: /Macrostructure First/ })).toBeVisible();
});

test("catalog filters by level and opens detail", async ({ page }) => {
  await page.goto("/catalog/anti-pattern/");
  await page.getByRole("combobox", { name: "Filter by level" }).selectOption("blocking");
  await expect(page.getByText("2 of 10")).toBeVisible();
  await page.getByRole("link", { name: /Fabricated Evidence/ }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Fabricated Evidence" })).toBeVisible();
});

test("mobile navigation and document reflow remain usable", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only disclosure check");
  await page.goto("/docs/composition/");
  await page.getByLabel("Open navigation").click();
  await expect(page.getByRole("link", { name: "Catalog" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: "Composition" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "On this page" })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});
