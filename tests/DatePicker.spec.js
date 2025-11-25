const { test, expect } =require('@playwright/test');


test("Date Picker",async({page})=>{               

    await page.goto ('https://testautomationpractice.blogspot.com/');

    //await page.fill("//input[@id='datepicker']",'07/17/1999');


    //Date Picker
    const year="2023"
    const month="March"
    const date="3"
    await page.click("//input[@id='datepicker']")    //Opens Calender and Date PickeR

    while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year').textContent()
        const currentMonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth==month)

        {
            break;
        }

        await page.locator ('[title="Next"]');            //CSS
    }


    const dates=await page.$$("//[@class='ui-state-default']")

    //Date Selection using loop
    /*for(const dt of dates)

    {
        if (await dt.textContent()==dates)
        {
            await dt.click();
            break;
        }
            
    }*/

        //Date selection without looP
        await page.click("")

    await page.waitForTimeout(5000);





})