const { test, expect } =require('@playwright/test');


test("Mouse Hover",async({page})=>{                  

    await page.goto ('https://demoblaze.com/index.html');
    const desktop= await page.locator('')
    const macbook=await page.locator('')

    //Mouse Hover
    await desktop.hover()
    await macbook.hover()

    await page.waitForTimeout(5000)

})
