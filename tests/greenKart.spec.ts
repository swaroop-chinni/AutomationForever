import { test, expect } from '@playwright/test'

/*test("validate the greenkart", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { timeout: 30000 });
    await page.waitForSelector('input#username', { state: 'visible' });
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("input#username").fill("rahulshettyacademy");
    await page.locator("input#password").fill("learning321");
    await page.locator("[name='signin']").click();
    const alertMsg = await page.locator("[style*='block']").textContent();
    await expect(alertMsg).toBe("Incorrect username/password.")
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //to validate the partial text content 
    console.log(alertMsg + "alertMsg")
}) */

test("validate the smart locator testing in playwright ", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("input#username").fill("rahulshettyacademy");
    await page.locator("input#password").fill("learning");
    await page.locator("[name='signin']").click();
    await page.locator(".card-title a").nth(0).textContent();
    let elements= await page.locator(".card-title a").allTextContents();
    console.log(elements)
})