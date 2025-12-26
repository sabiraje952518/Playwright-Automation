import { test, expect } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
    await page.goBack("https://demoblaze.com/index.html");
    await page.screenshot({path: 'tests\screenshots' + Date.now()+'HomePage.png'})

});



test.only('Full Page Screenshot', async ({ page }) => {
    await page.goBack("https://demoblaze.com/index.html");
    await page.screenshot({path: 'tests\screenshots' + Date.now()+'FullPage.png', fullPage:true})

});



test('Element Page Screenshot', async ({ page }) => {
    await page.goBack("https://demoblaze.com/index.html");
    await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4'])[1]").screenshot({path: 'tests\screenshots' + Date.now()+ 'Samsung galaxy s6.png'})
});