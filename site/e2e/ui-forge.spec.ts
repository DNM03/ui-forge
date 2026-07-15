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

test("Lenis and the themed scrollbar respect motion preferences", async ({ page }) => {
  await page.goto("/");

  await expect.poll(() => page.locator("html").evaluate((element) => element.classList.contains("lenis"))).toBe(true);

  const scrollbarColor = await page.locator("html").evaluate((element) => getComputedStyle(element).scrollbarColor);
  expect(scrollbarColor).not.toBe("auto");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.locator("html").evaluate((element) => element.classList.contains("lenis"))).toBe(false);
});

test("landing entry fits representative short viewport heights", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes("mobile"), "Geometry profiles run once in the desktop browser context");

  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 390, height: 667 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const geometry = await page.evaluate(() => {
      const bounds = (selector: string) => {
        const element = document.querySelector(selector);
        if (!element) throw new Error(`Missing evaluation element: ${selector}`);
        const rect = element.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom };
      };

      return {
        viewportHeight: window.innerHeight,
        header: bounds(".site-header-inner"),
        hero: bounds(".showcase-hero"),
        title: bounds(".showcase-hero h1"),
        intro: bounds(".showcase-intro"),
        install: bounds(".install-command"),
        actions: bounds(".showcase-actions"),
        nextSection: bounds(".proof-section"),
        nextSectionCue: bounds(".proof-copy .section-code"),
      };
    });

    expect(geometry.title.top).toBeGreaterThanOrEqual(geometry.header.bottom);
    expect(Math.max(geometry.intro.bottom, geometry.install.bottom, geometry.actions.bottom)).toBeLessThanOrEqual(
      Math.min(geometry.viewportHeight, geometry.hero.bottom),
    );
    expect(geometry.nextSection.top).toBeLessThan(geometry.viewportHeight);
    expect(geometry.nextSectionCue.top).toBeLessThan(geometry.viewportHeight);
    await expectNoHorizontalOverflow(page);
  }
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
  await expect(page.getByText("2 of 13")).toBeVisible();
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
