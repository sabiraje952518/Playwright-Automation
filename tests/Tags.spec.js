const { test, expect } = require('@playwright/test');

test('test1@Sanity', async ({ page }) => {
    console.log("This is my test 1...")

})

test('test2@Sanity', async ({ page }) => {
    console.log("This is my test 2...")

})


test('test3@Regression', async ({ page }) => {
    console.log("This is my test 3...")



})


test('test4@Regression', async ({ page }) => {
    console.log("This is my test 4...")

})

test('test5@Regression@Sanity', async ({ page }) => {
    console.log("This is my test 5...")


})


