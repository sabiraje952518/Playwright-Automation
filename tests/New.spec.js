const { test, expect } = require('@playwright/test');

test ('new book', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await page.locator('#btn-make-appointment').click();

    await page.locator('#txt-username').fill("John Doe");
    await page.locator('#txt-password').fill("ThisIsNotAPassword");
    await page.locator('#btn-login').click()

    await page.waitForTimeout(3000);

    //await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    await expect(page).toHaveTitle("CURA Healthcare Service")
    await page.locator('#combo_facility').selectOption('Seoul CURA Healthcare Center');
    await page.locator("#chk_hospotal_readmission").check()
    await page.locator("#radio_program_medicaid").check()

    await page.click('#txt_visit_date');
    await page.fill('#txt_visit_date', '03/11/2025'); 
    await expect(page.locator('#txt_visit_date')).toHaveValue('03/11/2025');
    await page.waitForTimeout(3000);

    await page.locator("#txt_comment").fill("OK.");
    await page.locator('#btn-book-appointment').click();
    //await expect(page.locator('//*[@id="summary"]/div/div/div[1]/h2')).toHaveText('Appointment Confirmation')
    await page.waitForTimeout(3000);





})