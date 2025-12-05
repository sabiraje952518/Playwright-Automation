const { test, expect } =require('@playwright/test');


test("Soft Assertions",async({page})=>{               

    await page.goto ('https://demoblaze.com/index.html');


    const rome=await page.locator('');
    const italy=await page.locator('');

    //Approach 1
    // await rome.hover()
    // await page.mouse.down()

    // await italy.hover()
    // await page.mouse.up();

    //Approach 2
    await rome.dragTo(italy)

    // //Washington
    // const washington= await page.locator('')



    await page.waitForTimeout(5000);

})