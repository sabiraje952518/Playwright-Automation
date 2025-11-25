const { test, expect } =require('@playwright/test');


test("Drop Down",async({page})=>{               

    await page.goto ('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    
   // await page.locator('#country').selectOption({label:'India'})   //label visible text
    //await page.locator('#country').selectOption('India');    //Visible Text
    //await page.locator('#country').selectOption({value:'uk'});    //By using Value
    //await page.locator('#country').selectOption({index:3});    //By using Indexing 0,1,2,3.4 etc
    //await page.selectOption("#country", 'India');   //by text

    //Assertions
    //1) check number of options in dropdown-APPROACH 1
    //const options=await page.locator('#country option')
    //await expect(options).toHaveCount(10);


    //2) check number of options in dropdown-APPROACH 2
   // const options=await page.$$('#country Option')
   // console.log("Number of options:", options.length)
   //await expect(options.length).toBe(10);

   //3) Check presence of value in the dropdown- Approach 1
   //const content=await page.locator('#country').textContent();
   //await expect(content.includes('India')).toBeTruthy();

   //4) Check presence of value in the dropdown- Approach 2 -using looping
   const options=await page.$$('#country option')

   for (const option of options)
   {
    console.log(await option.textContent());
   }


    await page.waitForTimeout(3000)



})