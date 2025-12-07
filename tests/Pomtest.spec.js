import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({page}) =>{

    //Login Page
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    //Home
    const home= new HomePage(page)
    await home.addProductTo

    //Add to Cart


})
