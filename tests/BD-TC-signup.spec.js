const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
const { test, expect } = require('@playwright/test');
test('BD-TC-signup', async ({ page }) => {
    const BDSignUp = process.env.USER_EMAIL || "sharmin.huq+tubeCe@aitrade.ai";
    const TCCopierSignUp = process.env.USER_EMAIL || "sharmin.huq+mebu@aitrade.ai"; 
    const TCVendorSignUp = process.env.USER_EMAIL || "sharmin.huq+snigdha@aitrade.ai"; 
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#"; 
    const emailForVerification = "sharmin.huq@aitrade.ai"; 
    const emailPassword = "Umra_December1#"; 

//BD SignUp

    await page.goto("https://www-develop.backtestdata.com/"); 
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click(); 
    await page.locator("//section//section[1]//div[1]//div[16]//div[3]//div[1]//div[1]//button[1]").click(); 
    await page.locator("//input[@id='email']").fill(BDSignUp); 
    await page.locator("//input[@id='cardName']").fill('Sharmin Huq'); 
    await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
    await page.locator("//input[@id='expiryDate']").fill('02/34');
    await page.locator("//input[@id='cvc']").fill('456');
    await page.locator("//div[@class='react-select__value-container css-1d8n9bt']").click();
    await page.click('text=Australia');
    await page.locator("//input[@id='city']").fill('Panthapath');
    await page.locator("//input[@id='state']").fill('Dhaka');
    await page.locator("//input[@id='postCode']").fill('34567');
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Confirm Payment']").click();
    await page.waitForTimeout(20000);

 // Email Verification

     await page.goto("https://webmail.migadu.com/"); 
     await page.waitForSelector("//input[@placeholder='Email']");
     await page.locator("//input[@placeholder='Email']").fill(emailForVerification);
     await page.locator("//input[@placeholder='Password']").fill(emailPassword);
     await page.locator("//button[normalize-space()='Sign In']").click();
     await page.waitForTimeout(10000);
     await page.waitForSelector("//input[@id='folderSearchInput']");
     await page.locator("//input[@id='folderSearchInput']").fill('tubeCe'); 
     await page.locator("//a[normalize-space()='tubeCe']").click()
     await page.locator("//div[contains(@title,'office@backtestdata.com')]").click()
     await page.locator("//a[normalize-space()='Verify Email']").click()
    

// THIS  PART IS NOT WORKING, HAS TO FIXED

    await page.waitForLoadState('networkidle'); 
    await page.waitForSelector("#fullName", { state: 'visible' });
    await page.locator("#fullName").fill("Sharmin Huq");
    await page.waitForSelector("#password", { state: 'visible' });
    await page.locator("#password").fill("Bangladesh1#");
    await page.waitForSelector("#repeatPassword", { state: 'visible' });
    await page.locator("#repeatPassword").fill("Bangladesh1#");
    await page.waitForSelector("button:text('Complete Registration')", { state: 'enabled' });
    await page.locator("button:text('Complete Registration')").click();


//TC register for copier

//     await page.goto("https://www-develop.tradecopy.io/");
//     await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
//     await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
//     await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:m-auto'])[1]").click()
//     await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click()
//     await page.locator("//input[@id='email']").fill(TCCopierSignUp);
//     await page.locator("//input[@id='cardName']").fill('Sharmin Huq');
//     await page.locator("//input[@id='cardNumber']").fill('4242 4242 4242 4242');
//     await page.locator("//input[@id='expiryDate']").fill('02/34');
//     await page.locator("//input[@id='cvc']").fill('456');
//     await page.locator("//div[@class='react-select__input-container css-19bb58m']").click();
//     await page.click('text=Australia');
//     await page.locator("//input[@id='city']").fill('Panthapath');
//     await page.locator("//input[@id='state']").fill('Dhaka');
//     await page.locator("//input[@id='postCode']").fill('34567');
//     await page.locator("//input[@id='check']").check();
//     await page.locator("//button[normalize-space()='Subscribe']").click();
//     await page.waitForTimeout(20000);

// Email Verification

// await page.goto("https://webmail.migadu.com/");
// await page.waitForSelector("//input[@id='folderSearchInput']");
// await page.locator("//input[@id='folderSearchInput']").fill('mebu'); // Fixed issue here
// await page.locator("//a[normalize-space()='mebu']").click()
// await page.locator("//div[@title='office@tradecopy.io']").click()
// await page.locator("//a[normalize-space()='Verify Email']").click()


// THIS  PART IS NOT WORKING, HAS TO FIXED//

// try {
//    await page.locator("//input[@id='fullName']").waitFor({ state: 'attached', timeout: 5000 });
//    await page.evaluate(() => document.getElementById('fullName')?.removeAttribute('readonly'));
//    await page.locator("//input[@id='fullName']").click();
//    await page.locator("//input[@id='fullName']").type('Sharmin Huq', { delay: 100 });
//    await page.locator("//input[@id='password']").waitFor({ state: 'attached', timeout: 5000 });
//    await page.locator("//input[@id='password']").click();
//    await page.locator("//input[@id='password']").type('Bangladesh1#', { delay: 100 });
//    await page.locator("//input[@id='repeatPassword']").waitFor({ state: 'attached', timeout: 5000 });
//    await page.locator("//input[@id='repeatPassword']").click();
//    await page.locator("//input[@id='repeatPassword']").type('Bangladesh1#', { delay: 100 });
//    await page.locator("//button[normalize-space()='Complete Registration']").click();
//    await page.waitForTimeout(5000);
// } catch (error) {
//    console.log("❌ Error occurred in the form filling process. Skipping this part...");
// }
// console.log("✅ Continuing with the rest of the test...");


//TC register for vendor

//     await page.goto("https://www-develop.tradecopy.io/");
//     await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1) > svg:nth-child(1)").click();
//     await page.locator("//div[contains(@class,'Main_url-query-button__8gH1s')]").click();
//     await page.locator("(//div[@class='border-[#f7f7f7] shadow-2md w-[200px] h-40 text-center px-4 py-[13px] rounded-[28px] border-[3px] border-solid bg-[#fff] hover:bg-[#eff8ff] hover:cursor-pointer hover:border-[#0130b7] 2xs-l:mb-auto 2xs-l:mx-auto'])[1]").click()
//     await page.locator("//div[contains(@class,'w-full text-center m-auto')]").click();
//     await page.locator("//input[@id='fullName']").fill('Sharmin Huq');
//     await page.locator("//input[@id='email']").fill(TCVendorSignUp);
//     await page.locator("//input[@id='password']").fill('Bangladesh1#');
//     await page.locator("//input[@id='repeatPassword']").fill('Bangladesh1#');
//     await page.locator("//textarea[@id='description']").fill('As an experienced trader, I specialize in [mention your specific markets, like forex, stocks, crypto, etc.], leveraging insights and proven strategies to maximize growth and manage risk effectively. I am committed to transparency, disciplined trading practices, and continual market analysis to help you achieve your financial goals. Join my trade journey to benefit from a well-informed, responsive trading approach.');
//     await page.locator("//button[normalize-space()='Complete Registration']").click();
//     await page.waitForTimeout(20000);

//     // Email Verification
//     await page.goto("https://webmail.migadu.com/");
//     await page.waitForSelector("//input[@id='folderSearchInput']");
//     await page.locator("//input[@id='folderSearchInput']").fill('snigdha');
//     await page.locator("//a[normalize-space()='snigdha']").click();
//     await page.locator("//div[@title='office@tradecopy.io']").click();
//     await page.locator("//a[normalize-space()='Verify Email']").click();


// THIS PART MUST WORK, OTHERWISE STOP EXECUTION
// try {
//     await page.locator("//input[@id='fullName']").waitFor({ state: 'attached', timeout: 5000 });
//     await page.evaluate(() => document.getElementById('fullName')?.removeAttribute('readonly'));
//     await page.locator("//input[@id='fullName']").click();
//     await page.locator("//input[@id='fullName']").type('Sharmin Huq', { delay: 100 });

//     await page.locator("//input[@id='password']").waitFor({ state: 'attached', timeout: 5000 });
//     await page.locator("//input[@id='password']").click();
//     await page.locator("//input[@id='password']").type('Bangladesh1#', { delay: 100 });

//     await page.locator("//input[@id='repeatPassword']").waitFor({ state: 'attached', timeout: 5000 });
//     await page.locator("//input[@id='repeatPassword']").click();
//     await page.locator("//input[@id='repeatPassword']").type('Bangladesh1#', { delay: 100 });

//     await page.locator("//button[normalize-space()='Complete Registration']").click();
    // await page.waitForTimeout(20000);
// } catch (error) {
//     console.error("❌ Critical Error: Could not complete registration. Stopping execution...");
//     throw error; // Stops the script completely
// }

// console.log("✅ Registration completed successfully!");

});
