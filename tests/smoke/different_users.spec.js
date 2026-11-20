import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import multiuser from '../../testdata/allUsers.json'

test.describe("Data Driven Testing for Login Scenario",{tags: ["datadriven", "login"]} , ()=>{

    
for (const user1 of multiuser) {


    test(`login to application with ${user1.id}`, async ({ page }) => {

        await page.goto('/login');

        const loginPage = new LoginPage(page);

        await loginPage.loginToApplication(user1.username, user1.password);
         expect(await loginPage.getErrorMessage()).toBe(user1.message);

    });

}

})
