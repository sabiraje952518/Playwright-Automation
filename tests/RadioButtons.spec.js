const {test, expect}=require('@playwright/test')

test('handle radio button', async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.locator("//input[@id='male']").check()   //Male Radio button
 // await page.check("//input[@id='male']")
 
  await expect (await page.locator("//input[@id='male']")).toBeChecked();   //Assertion to be checked await expect()
  await expect (await page.locator("//input[@id='male']").isChecked()).toBeTruthy

  await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy  //Female


  await page.waitForTimeout(5000); //pausing code





})  