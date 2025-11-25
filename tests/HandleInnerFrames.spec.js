const { test, expect } = require('@playwright/test');

test('Handle Inner frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //frame3.locator("//input[@name='mytext3']").fill('WELCOME')

    //nested frames
    const childFrames=await  frame3.childFrames()
    await childFrames[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check();                //indexing start from 0
    await page.waitForTimeout(3000);



})