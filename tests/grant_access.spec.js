const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    const userEmailAdmin = process.env.USER_EMAIL || "sharmin.huq+admin@aitrade.ai";
    const userPassword = process.env.USER_PASSWORD || "Bangladesh1#";

    // BD Admin Login
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//*[name()='svg'][@role='img'])[1]").click();
    await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill(userEmailAdmin);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill(userPassword);
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(3000);


    // Navigate to User Access Page
await page.locator("//span[contains(@class,'font-medium text-sm')][normalize-space()='Users']").click();
await page.waitForSelector("//h1[normalize-space()='10434']", { state: 'visible' });
await page.locator("//h1[normalize-space()='10434']").click();
await page.waitForSelector("(//button[normalize-space()='Products'])[1]", { state: 'visible' });
await page.locator("(//button[normalize-space()='Products'])[1]").click();
await page.waitForTimeout(3000);

// Plans to grant access
const plans = ["Commodity", "Bonds", "Stocks", "Futures", "Cryptocurrencies", "Forex"];

for (const plan of plans) {
    const grantButton = await page.locator("(//button[normalize-space()='Grant Access'])[1]");

    // Check if the "Grant Access" button is visible
    if (await grantButton.isVisible()) {
        await grantButton.click();
        await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
        
        // Open the dropdown
        await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
        await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
        
        // Select the current plan from the dropdown
        const planOption = await page.locator(`//div[contains(@class,'react-select__option') and text()='${plan}']`);
        if (await planOption.isVisible()) {
            await planOption.click();
            console.log(`Selected plan: ${plan}`);
        } else {
            console.log(`Plan ${plan} not found in dropdown`);
            break;
        }

        // Click the "Grant Access" confirmation button
        const confirmButton = await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']");
        if (await confirmButton.isVisible()) {
            await confirmButton.click();
            console.log(`Grant Access clicked for ${plan}`);
        } else {
            console.log(`Grant Access button not clickable for ${plan}`);
        }

        // Add a small timeout to ensure the action is completed before moving to the next plan
        await page.waitForTimeout(2000);
    } else {
        console.log(`No Grant Access button available for plan: ${plan}`);
    }
}

console.log("Grant access process completed for all plans.");


    

//     // Product grant access
//     await page.locator("//span[contains(@class,'font-medium text-sm')][normalize-space()='Users']").click();
//     await page.waitForSelector("//h1[normalize-space()='10434']", { state: 'visible' });
//     await page.locator("//h1[normalize-space()='10434']").click();
//     await page.waitForSelector("(//button[normalize-space()='Products'])[1]", { state: 'visible' });
//     await page.locator("(//button[normalize-space()='Products'])[1]").click();
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);

//     // then select "Commodity"
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Commodity']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);


//     //select Bonds
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Bonds']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);


//      //then select "Stocks"
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Stocks']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);


//    // then select "Forex"
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Forex']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);


//      //then select "Cryptocurrencies"
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Cryptocurrencies']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);


//     // then select "Futures"
//     await page.waitForSelector("(//button[normalize-space()='Grant Access'])[1]", { state: 'visible' });
//     await page.waitForTimeout(3000);
//     await page.locator("(//button[normalize-space()='Grant Access'])[1]").click();
//     await page.waitForTimeout(3000);
//     await page.waitForSelector("//div[contains(@class,'react-select__dropdown-indicator')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__dropdown-indicator')]").click();
//     await page.waitForSelector("//div[contains(@class,'react-select__menu')]", { state: 'visible' });
//     await page.locator("//div[contains(@class,'react-select__option') and text()='Futures']").click();
//     await page.waitForTimeout(1000);
//     await page.locator("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 w-full']").click();
//     await page.waitForTimeout(3000);
     
});
