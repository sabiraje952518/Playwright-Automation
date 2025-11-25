const { test, expect } =require('@playwright/test');


test("Test1",async({page})=>{ 
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle("STORE");

})

test("Test2",async({page})=>{ 
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await expect(page).toHaveTitle("OpenCart - Demo");
})

test("Test3",async({page})=>{ 
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

})