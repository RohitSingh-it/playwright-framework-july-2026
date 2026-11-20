# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Tests >> login to application
- Location: tests\smoke\login.spec.js:7:1

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://freelance-learn-automation.vercel.app/login
Call log:
  - navigating to "https://freelance-learn-automation.vercel.app/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { DashboardPage } from '../../pages/DashboardPage';
  4  | import user from '../../testdata/user.json';
  5  | 
  6  | test.describe("Login Tests",{tags: ['smoke','login']},()=>{
  7  | test('login to application', async ({ page }) => {
  8  | 
> 9  |     await page.goto('/login');
     |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://freelance-learn-automation.vercel.app/login
  10 |     const loginPage = new LoginPage(page);
  11 |     console.log(`Test Data Used In This Test ${user.username} and ${user.password}`);
  12 |     await loginPage.loginToApplication(user.username, user.password);
  13 |     const dashboardPage = new DashboardPage(page);
  14 |     await dashboardPage.clickOnMenuIcon();
  15 |     await dashboardPage.clickOnSignOutButton()
  16 | 
  17 | 
  18 | });
  19 | 
  20 | })
  21 | 
  22 | 
```