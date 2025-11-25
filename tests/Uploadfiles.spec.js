// Reference: https://playwright.dev/docs/input#upload-files


const {test, expect}=require('@playwright/test')

test('Single File', async ({page})=>{


   await page.goto('https://www.foundit.in/')

   await page.waitForSelector('.mqfihd-upload');

   await page.locator('.mqfihd-upload').click()

   await page.locator('#file-upload').setInputFiles('tests\Uploadfile\testfile1.pdf')

   await page.waitForTimeout(5000)

})

   test.only('Multiple Files', async ({page})=>{
        
       await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload')       
                          .setInputFiles(['tests\Uploadfile\testfile1.pdf', 
                                            'tests\Uploadfile\testfile2.pdf']);

    await page.waitForTimeout(3000)
    expect (await page. locator('testfile1.pdf')).toHaveText('testfile1.pdf')
    expect (await page. locator('testfile2.pdf')).toHaveText('testfile2.pdf')

    await page.waitForTimeout(3000)

//Removing files
    await page. locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000);

    expect(await page.locator('testfile1.pdf')).toHaveText('No Files Selected')

    await page.waitForTimeout(3000);



})






































































































































































