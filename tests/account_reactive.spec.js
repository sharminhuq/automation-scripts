const { test, expect } = require('@playwright/test');

test('Login and Signup Test', async ({ page }) => {
    const userEmail = process.env.USER_EMAIL || "sharmin.huq+BDFeatureTest@aitrade.ai"; 
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 
    const emailForVerification = "sharmin.huq@aitrade.ai";
    const emailPassword = "Umra_December1#";

    //BD Subscriber Login
    await page.goto("https://www-develop.backtestdata.com/");
    await page.waitForSelector("(//*[name()='svg'][@role='img'])[1]");
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.waitForSelector("//input[@id='username']");
    await page.locator("//input[@id='username']").fill(userEmail);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(5000);
    

    // BD SignUp
    await page.goto("https://www-develop.backtestdata.com/");
    await page.waitForSelector("(//span[contains(text(),'Pricing')])[1]");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.waitForSelector("//section//section[1]//div[1]//div[16]//div[3]//div[1]//div[1]//button[1]");
    await page.locator("//section//section[1]//div[1]//div[16]//div[3]//div[1]//div[1]//button[1]").click();
    await page.waitForSelector("//input[@id='email']");
    await page.locator("//input[@id='email']").fill(userEmail);
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.waitForSelector("//div[@class='react-select__value-container css-1d8n9bt']");
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click("text=Australia");
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Reactivate & Confirm Payment']").click();
    await page.waitForTimeout(5000); // This should ideally be replaced with a `waitForSelector()` for a success message

    // Email Verification
    await page.goto("https://webmail.migadu.com/");
    await page.waitForSelector("//input[@placeholder='Email']");
    await page.locator("//input[@placeholder='Email']").fill(emailForVerification);
    await page.locator("//input[@placeholder='Password']").fill(emailPassword);
    await page.locator("//button[normalize-space()='Sign In']").click();
    await page.waitForSelector("//input[@id='folderSearchInput']");
    await page.locator("//input[@id='folderSearchInput']").fill('BDFeatureTest'); // Fixed issue here
    await page.locator("//a[normalize-space()='bdfeaturetest']").click()
    await page.locator("//div[contains(@title,'( https://u33809073.ct.sendgrid.net/ls/click?upn=u001.4qbIxdgpzzPBUxbyMPGypbLYlRQCfRtc0VzRbBzsw3sVKV-2BbA9cuRsNLmyqz1Upx9A4S_haKti60o1nT25gQO7KwQjCGogiydcQQ96V9P-2BFNCXzDwGYkNivPP-2BWFhz45IUuFPphc57Lv')]//div[contains(@title,'office@backtestdata.com')][normalize-space()='Backtest Data']").click()
    await page.locator("//a[normalize-space()='Reactivate Account']").click()
    await page.waitForSelector("//input[@id='fullName']", { state: 'visible' });


    // THIS  PART IS NOT WORKING, HAS TO FIXED

    
    await page.locator("//input[@id='fullName']").fill('Sharmin Huq', { force: true });
    await page.waitForSelector("//input[@id='password']", { state: 'visible' });
    await page.locator("//input[@id='password']").fill('Bangladesh1#', { force: true });
    await page.waitForSelector("//input[@id='repeatPassword']", { state: 'visible' });
    await page.locator("//input[@id='repeatPassword']").fill('Bangladesh1#', { force: true });
    await page.locator("//button[normalize-space()='Complete Registration']").click();
    await page.waitForTimeout(5000);

});
