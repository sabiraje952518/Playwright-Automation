const { test, expect, chromium } =require('@playwright/test');

//only
/*test.only("test1",async({page})=>{
    console.log('this is test1')

})
    */

//Skip
/*test.skip("test2",async({page})=>{
    console.log('this is test2')
    })
*/


/*test("test3",async({page, browserName})=>{
    console.log('this is test3')
    if(browserName==='chromium')
    {
        test.skip()
    }

})*/

//Fixme
/*test("test4",async({page})=>{
    test.fixme()
    console.log('this is test 4...')
})*/

//fail
/*test("test5",async({page})=>{
    test.fail()       //expect
    console.log('this is test 5...')
    expect(1).toBe(1);    //Actual    expected and Actual are the same   // check with expect(1).toBe(2) if both exp and Actual is failed then test Pass
})*/

/*test("test6",async({page, browserName})=>{   
    console.log('this is test 6...')
    if(browserName==='firefox')    //Actual //check with firefox
    {
        test.fail()                  //Expected
    }
})
    */

test("test7",async({page, browserName})=>{
    test.slow();      //>>> test.slow method increase the time limit more than 3 times
    //test.setTimeout(5000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log('this is test7...')

})
    






