import  {test, expect} from '@playwright/test';

test.describe('Register', () => {
    test('Register with valid credentials', async ({ page }) => {
        await page.goto('/register');
        await page.fill('#name', 'John Doe');
        await page.fill('#email','email');
        await page.fill('#password','password');
        await page.click('#register-btn');
    });
test('Register with invalid credentials', async ({ page }) => {
        await page.goto('/register');
        await page.fill('#name', 'John Doe');
        await page.fill('#email','invalid-email');
        await page.fill('#password','password');
        await page.click('#register-btn');
        const errorMessage = await page.locator('.error-message').textContent();
        expect(errorMessage).toContain('Invalid email address');
    });
});
