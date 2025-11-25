const { test, expect } =require('@playwright/test');


test("Soft Assertions",async({page})=>{               

    await page.goto ('https://demoblaze.com/index.html');

    const button=await page.locator('')

    //
    await button.click({button:'right'});

    await page.waitForTimeout(5000);

})