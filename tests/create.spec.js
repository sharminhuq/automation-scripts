const { test, expect } = require('@playwright/test');
test('Login', async ({ page }) => {


    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const useremailAdminCreate = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input
    const confirmPassword = process.env.USER_PASSWORD || "Bangladesh1#"; // Dynamic password input
    const description = `As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.],
    leveraging insights and proven strategies to maximize growth and manage risk effectively.
    I am committed to transparency, disciplined trading practices, and continual market analysis
    to help you achieve your financial goals. Join my trade journey to benefit from a well-informed,
    responsive trading approach.`;

//BD Admin Login
    
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(3000);

    //Create User

    await page.locator("//span[@class='font-medium text-sm'][normalize-space()='Users']").click()
    await page.locator("//button[normalize-space()='Create New User']").click()
    await page.locator("//input[@id='fullName']").fill('Sharmin Huq')
    await page.locator("//input[@id='email']").fill(useremailAdminCreate)
    await page.locator("//input[@id='password']").fill(userPassword)
    await page.locator("//input[@id='confirmPassword']").fill(confirmPassword)
    await page.locator("//textarea[@id='description']").fill(description)
    await page.locator("//button[normalize-space()='Create User']").click()

    //Create Transaction
    
    await page.locator("//div[contains(text(),'Transactions')]").click()
    await page.locator("//button[normalize-space()='Create Transaction']").click()
    await page.locator("//label[@for='type']//div[@class='react-select__input-container css-19bb58m']").click()
    await page.click("text = Purchase")
    await page.locator("//div[@class='w-full h-full react-select-container !h-//div[@class='react-select__input-container css-19bb58m']")
    await page.click("text = 10260 Sharmin Huq")
    await page.click("//input[@id='amount']").fill("20")
    await page.click("//label[@for='status']//div[@class='react-select__input-container css-19bb58m']")
    await page.click("text = Succeeded")
    await page.click("//input[@id='referenceId']").fill("3")
    await page.click("//input[@id='createTime']").fill('03/03/2025')
    await page.click("//input[@id='createTime']").fill(description)
    await page.click("//button[@type='submit'][normalize-space()='Create Transaction']").click()

    //Create Pricing Plan

    await page.locator("//button[@id='radix-:r18:']").click()
    await page.locator("//button[normalize-space()='Create Plan']").click()
    await page.locator("//input[@id='name']").fill("Test")
    await page.locator("//input[@id='monthlyCharge']").fill(300)
    await page.locator("//input[@id='amount']").fill('50')
    await page.locator("//input[@id='size']").fill('5')
    await page.locator("//input[@id='totalFiles']").fill('2')
    await page.locator("//input[@id='yearSince']").fill('2025')
    await page.locator("//input[@id='market']").fill('Gio')
    await page.locator("//input[@id='source']").fill('www.trbdjdbf.com')
    await page.locator("//input[@id='sourceLink']").fill('fghjmsgh')
    await page.locator("//button[@type='submit'][normalize-space()='Create Plan']").click()



});