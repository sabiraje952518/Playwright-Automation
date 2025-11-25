const { test, expect } = require('@playwright/test');        //Iske through hum Playwright ko import kar lenge

test.skip("Valid Login", async ({ page }) => {             //Test script yha se start hota hai jisme valid login ko hmlog description koi bhi ho skta hai
        // async keyword use krte hai Asynchronous k liye taki koi bhi promise fulfill ho jaye jaise click, fill, checked etc.
        // Page yha par new page open krne k liye likhte hai yha par browser bhi ho skta hai jise context broser bhi kah skte hai

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");       //await ka use hmlog isliye krte hai taki koi bhi task jbtak fullfill na ho jaye next line code pr na jaye
                   // page.goto se hmlog url pr jate hai 

  //Locator by Placeholder
  await page.getByPlaceholder("Username").fill("Admin");        // page.getbyplaceholder k through humlog web element ko pick kar lenge aur phir usme fill k through jo hme text bhejna hai ya value bhejna hai bhej dete hai.

  await page.locator("input[name='password']").fill("admin123");  //page.locator k through humlog kisi bhi web element ka X-Path nikalte hai

  await page.locator("//button[@type='submit']").click();   // .click() koi bhi button pr click kra lenge

  await page.waitForTimeout(5000)    // ye humlog 5 milli second page ko hold krenge ya wait krne k liye bolenge

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");   //Assertion k through expect lga kar uske URL ko verify krenge jiska command ToHaveURL hai ye kuchh bhi ho skta hai ToHaveText...
  await page.getByAltText("profile picture").first().click()  // Yha alternate text k through uska value inspect kar k nikal lenge then, hum click operation perform krenge
  // yha .first indexing k liye huaa hai

  await page.getByText("Logout").click()  //getBytext ka value inspect kar k web element par click kra liye hai

  await page.waitForTimeout(3000)

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});

test.only("InValid Login", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  //Locator by Placeholder
  await page.getByPlaceholder("Username").fill("Admin");

  await page.locator("input[name='password']").fill("admi123456");

  await page.locator("//button[@type='submit']").click();

  await page.waitForTimeout(5000)
  await expect(page.locator("//*[text()='Invalid credentials']")).toHaveText('Invalid credentials')


});
