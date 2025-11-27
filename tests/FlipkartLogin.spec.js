const { test, expect } = require('@playwright/test');

test("Valid Login", async ({ page }) => {

  await page.goto("https://www.flipkart.com/");

  await page.locator('//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/header/div[2]/div[2]/div/div/div/div/a/span').click();
    
  await page.locator('//*[@id="container"]/div/div[3]/div/div[2]/div/form/div[1]/input').click();
    await page.locator('//*[@id="container"]/div/div[3]/div/div[2]/div/form/div[1]/input').fill('6207662994');
    await page.locator("//button[@class='QqFHMw twnTnD _7Pd1Fp']").click();
    await page.waitForTimeout(5000);


  
})

//Sabi Raje