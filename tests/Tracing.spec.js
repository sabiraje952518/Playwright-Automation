import { test, expect } from '@playwright/test';

test('Trace', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#logout2')).toBeVisible()
  await page.waitForTimeout(3000)
});