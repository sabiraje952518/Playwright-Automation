const { test, expect } =require('@playwright/test');
test("Keyboard Actions", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");
    //await page.locator('[name="text1"]').fill ('Welcome to Playwright Automation')
    await page.type('[name="text1"]','Welcome to Playwright Automation' )

    //Ctrl+A
    await page.keyboard.press('Control+A')

    //Ctrl+C
    await page.keyboard.press('Control+C')


    //Tab
    await page.keyboard.up('Tab');
    await page.keyboard.down('Tab')



    //Ctrl+V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);

})