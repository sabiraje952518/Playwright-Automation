const { test, expect } =require('@playwright/test');


test("Soft Assertions",async({page})=>{                  //Test Name Soft Assertions and pass page object that need to specify async

    await page.goto ('https://demoblaze.com/index.html');

   /*
    //Hard Assertions
    await expect(page).toHaveTitle('STORE')
    await expect (page).toHaveURL("https://demoblaze.com/index.html")
    await expect (page.locator('a.navbar-brand')).toBeVisible();   //Branding LOgo Locator
    */

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE1333393')              //Change Locator and aplly Soft Assertions
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html")
    await expect.soft(page.locator('a.navbar-brand')).toBeVisible();   //Branding LOgo Locator
})


