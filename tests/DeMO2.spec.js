const { test, expect } =require('@playwright/test');

test('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John');   //John value input field me pass kr k verify krega  
        
    });
    await page.click('promptBtn"]');
    await expect(page.locator('Xpath"]')).toHaveText('Hello John! How are you')


    await page.waitForTimeout(5000);
    
});