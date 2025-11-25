const { test, expect } =require('@playwright/test');


test("Multi Select Dropdown Assertions",async({page})=>{               

    await page.goto ('https://testautomationpractice.blogspot.com/');

    //Select multiple options from multi select dropdown
    //await page.selectOption('#colors', ['Blue','Red','Yellow'])


    // Assertions
    //1) Check number of options in dropdown
    //const options=await page.locator('#colors option')
    //await expect(options).toHaveCount(5);


    // check no. of options in dropdown using JS array
    //const options=await page.$$('#colors Option')
    //console.log("Number of options:", options.length)
    //await expect(options.length).toBe(7);

    // 3) check presence of value in the dropdown
    const content=await page.locator('#colors').textContent()
    //await expect (content.includes('Blue')).toBeTruthy()
    await expect (content.includes('Black')).toBeFalsy()




   await page.waitForTimeout(3000);

})
