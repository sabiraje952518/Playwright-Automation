const {test, expect}=require('@playwright/test')

test("handle checkboxes", async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');


   //Single Checkbox
  await page.locator("//input[@id='monday']").check()   //Monday
 
  await expect (await page.locator("//input[@id='monday']")).toBeChecked();   //Assertion to be checked await expect()
  await expect (await page.locator("//input[@id='monday']").isChecked()).toBeTruthy; //Monday checked hai ki nhi verify krne k liye
  await expect (await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy;  //Sunday checked nhi hai oo verify krne k liye negative test cases

    await page.waitForTimeout(5000); //pausing code


    //Multiple Checkboxes
    const checkboxesLocators=["//input[@id='monday']",
                              "//input[@id='tuesday']",
                              "//input[@id='sunday']"
    ];

    for (const locator of checkboxesLocators)           // Multiple checkbixes Select
    {
        await page.locator(locator).check()

    }

    for (const locator of checkboxesLocators)           // unselect Multiple uncheckboxes which are already Selected
    {
        if (await page.locator(locator).isChecked())  // Phle check krenge ki checkboxes selected hai ki nhi phir unselect krenge
        {
        await page.locator(locator).uncheck()
        }

    }




})