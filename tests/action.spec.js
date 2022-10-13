import { test, expect, chromium } from "@playwright/test";
test.describe("navigation", () => {
  let browser;
  let page;
  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });
  test.afterAll(async () => {
    await browser.close();
  });
  test("should navigate between buttons", async () => {
    await page.goto("http://localhost:3000/");
    await page.locator("#green").click();
    await page.locator("#red").click();
    await page.locator("#yellow").click();
    await page.locator("#blue").click();
    });
  test("should create task", async () =>{
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').fill("erty");
    await page.locator("svg").first().click();
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').fill("dfghjk");
    await page.locator("svg").first().click();
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').fill("oippp");
    await page.locator("path").first().click();
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').fill("wxfg");
    await page.locator("svg").first().click();
    await page.locator('input[name="msg"]').click();
    await page.locator('input[name="msg"]').fill("dfgh");
  })

  test("should check button and switch between actions", async () =>{
    await page.locator("svg").first().click();
    await page.locator("#ischeked0").check();
    await page.locator("#ischeked2").check();
    await page.getByRole("button").nth(1).click();
    await page.getByRole("button").nth(2).click();
    await page.getByRole("button", { name: "All" }).click();
    await page.getByRole("button").nth(4).click();
     })
});
