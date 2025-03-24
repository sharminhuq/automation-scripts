const { test, expect } = require('@playwright/test');

test('Login and interact with "View All" button', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 

    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();

    const viewAllButton = await page.locator("(//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All'])[1]").click();
    await page.goBack();
    await page.locator("//body/div[@id='__next']/div[contains(@class,'grid relative w-full h-full overflow-x-hidden')]/section[contains(@class,'grid w-screen transition-/div[contains(@class,'h-full relative grid-areas-narrow 1lg:h-full 1lg:grid-areas-narrow 0md:h-full 0md:bg-/div[contains(@class,'px-/div[contains(@class,'min-h-screen pb-20 lg:pb-0')]/div[contains(@class,'relative')]/div[1]").click();
    await page.goBack();
    await page.locator("//a[contains(@href,'/plans/instrument/')]//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All']").click();
    await page.goBack();
    await page.locator("//a[contains(@href,'/plans/requests/')]//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All']").click();
    await page.goBack();
    await page.locator("//a[contains(@href,'/subscriptions/')]//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All']").click();
    await page.goBack();
    await page.locator("//a[contains(@href,'/subscriptions/')]//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All']").click();
    await page.goBack();
    await page.locator("//a[contains(@href,'/subscriptions/')]//button[contains(@class,'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-200 h-9 px-3 rounded-full')][normalize-space()='View All']").click();
    await page.goBack();

    if (await viewAllButton.isVisible()) {
        await viewAllButton.click();
        await page.goBack();
    } else {
        await page.locator("(//span[@class='pl-2'])[1]").click();
        await page.locator("//button[contains(text(),'Logout')]").click();
        await expect(page).toHaveURL('https://www-develop.backtestdata.com/');
    }
    
});
