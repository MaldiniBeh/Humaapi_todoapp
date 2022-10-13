import { test, expect, chromium } from "@playwright/test";
test.describe("navigation", () => {
  let browser;
  let page;
  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    page = await browser.newPage();
    // Go to the starting url before each test.
    await page.goto("https://playwright.dev/");
  });
  test.afterAll(async () => {
    await browser.close();
  });
  test("main navigation", async () => {
    await page.getByRole("link", { name: "Get started" }).click();
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");
  });
});
