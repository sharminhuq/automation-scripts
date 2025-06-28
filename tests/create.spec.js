const { test, expect } = require('@playwright/test');

test('Admin Workflow: Login, Create User, Transaction, and Pricing Plan', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input

    const description = `As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.],
    leveraging insights and proven strategies to maximize growth and manage risk effectively.
    I am committed to transparency, disciplined trading practices, and continual market analysis
    to help you achieve your financial goals. Join my trade journey to benefit from a well-informed,
    responsive trading approach.`;

    // Admin Login
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(@class, 'flex')])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]").click();
    await page.locator("#username").fill(userEmailAdmin);
    await page.locator("#password").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(3000);

    // Create User
    await page.locator("//span[@class='font-medium text-sm'][normalize-space()='Users']").click();
    await page.locator("//button[normalize-space()='Create New User']").click();
    await page.locator("#fullName").fill('Sharmin Huq');
    await page.locator("#email").fill(userEmailAdmin);
    await page.locator("#password").fill(userPassword);
    await page.locator("#confirmPassword").fill(userPassword);
    await page.locator("#description").fill(description);
    await page.locator("//button[normalize-space()='Create User']").click();
    await page.waitForTimeout(2000);

    // Create Transaction
    await page.locator("//div[contains(text(),'Transactions')]").click();
    await page.locator("//button[normalize-space()='Create Transaction']").click();
    await page.locator("//label[@for='type']").click();
    await page.locator("//div[contains(text(), 'Purchase')]").click();
    await page.locator("//input[@id='amount']").fill("20");
    await page.locator("//label[@for='status']").click();
    await page.locator("//div[contains(text(), 'Succeeded')]").click();
    await page.locator("#referenceId").fill("3");
    await page.locator("#createTime").fill("03/03/2025");
    await page.locator("#description").fill(description);
    await page.locator("//button[normalize-space()='Create Transaction']").click();
    await page.waitForTimeout(2000);

    // Create Pricing Plan
    await page.locator("//button[@id='radix-:r18:']").click();
    await page.locator("//button[normalize-space()='Create Plan']").click();
    await page.locator("#name").fill("Test");
    await page.locator("#monthlyCharge").fill("300");
    await page.locator("#amount").fill("50");
    await page.locator("#size").fill("5");
    await page.locator("#totalFiles").fill("2");
    await page.locator("#yearSince").fill("2025");
    await page.locator("#market").fill("Gio");
    await page.locator("#source").fill("www.trbdjdbf.com");
    await page.locator("#sourceLink").fill("fghjmsgh");
    await page.locator("//button[normalize-space()='Create Plan']").click();

    console.log("✅ Test completed successfully");
});
