import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

  // Home Page  
  const products = await page.$$('.hrefch');
  expect(products).toHaveLength(9);

  // Logout
  await page.locator('#logout2').click();
});

test('Add Product to cart Test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

  //Add product to cart
  await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a')   // Samsung Galxy S6
  await page.locator('//*[@id="tbodyid"]/div[2]/div/a')    // Add to cart button
  page.on('dialog',async Dialog=>{
    expect (dialog.message()).toContain('Product added.')
    await dialog.accept()
  })


  // Logout
  await page.locator('#logout2').click();
});


