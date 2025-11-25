const { test, expect } = require('@playwright/test');

test("Valid Login", async ({ page }) => {

  await page.goto("https://www.flipkart.com/");

  await page.locator("(//a[@class='_1TOQfO'])[1]").click();
    
  })