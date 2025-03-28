const { test, expect } = require('@playwright/test');

test('Validate the Playwright configuration - Login to Rahul Shetty Academy', async ({ browser }) => {
  // Step 1: Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage(); // Added 'await' here

  // Step 2: Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { timeout: 30000 });

  // Step 3: Fill the login form using getByRole and other locators
  await page.getByRole('textbox', { name: 'username' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'password' }).fill('learning');
  await page.getByRole('checkbox', { name: 'I Agree to the terms' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Step 4: Wait for navigation and verify login success
  await page.waitForNavigation();
  await expect(page.locator('(//a[@class="navbar-brand"])[1]')).toHaveText('ProtoCommerce');

  // Step 5: Clean up
  await context.close();
  await browser.close();
});