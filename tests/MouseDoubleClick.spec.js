const { test, expect } =require('@playwright/test');


test("Soft Assertions",async({page})=>{               

    await page.goto ('https://demoblaze.com/index.html');

    const btncopy=await page.locator('')

    //double click
    await btncopy.dblclick();

    const f2=await page.locator('');

    await expect(f2).toHaveValue('')

    await page.waitForTimeout(5000);

})