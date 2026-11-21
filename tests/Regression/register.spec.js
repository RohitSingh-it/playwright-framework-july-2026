import  {test, expect} from '@playwright/test';

test.describe('Register', () => {
    test('Register with valid credentials', async ({ page }) => {
        await page.goto('/register');
        await page.fill('#name', 'John Doe');
        await page.fill('#email','email');
        await page.fill('#password','password');
        await page.click('#register-btn');
    });

});
