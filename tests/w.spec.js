const { test, expect } = require('@playwright/test');

test('Login and Withdraw with dynamic row selection', async ({ page }) => {
  const vendorCredentials = {
    username: 'sharmin.huq+vendor@aitrade.ai',
    password: 'Bangladesh1#',
  };

  const adminCredentials = {
    username: 'sharmin.huq+admin@aitrade.ai',
    password: 'Bangladesh1#',
  };

  const withdrawalAmount = '100';

  // Vendor Login
  await page.goto('https://www-develop.tradecopy.io/');
  await page.locator("(//span[@class='flex justify-center items-center'])[1]").click();
  await page.locator("//div[normalize-space()='Login']").click();
  await page.locator("//input[@id='username']").fill(vendorCredentials.username);
  await page.locator("//input[@id='password']").fill(vendorCredentials.password);
  await page.locator("//button[normalize-space()='Login']").click();
  await page.waitForLoadState('networkidle'); 
  await page.waitForTimeout(5000);
  // Withdraw Process
  await page.locator("//span[normalize-space()='Income']").click();
  await page.locator("//span[@class='text-base']").click();

  const withdrawInput = page.locator("//input[@placeholder='Withdraw Amount']");
  await withdrawInput.fill('');
  await withdrawInput.fill(withdrawalAmount); 

  const description = `I happily withdraw ${withdrawalAmount}USD from my vendor account`;
  await page.locator("//textarea[@placeholder='Optional Description']").fill(description);

  await page.locator(
    "(//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 withdraw-button w-full mt-3'])[1]"
  ).click();
  
  await page.waitForTimeout(5000);

  // Admin Login
  await page.goto('https://www-develop.tradecopy.io/');
  await page.locator("//button[normalize-space()='Logout']").click();
  await page.locator("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-red-600 hover:bg-red-700']").click();

  await page.locator("//div[normalize-space()='Login']").click();
  await page.locator("//input[@id='username']").fill(adminCredentials.username);
  await page.locator("//input[@id='password']").fill(adminCredentials.password);
  await page.locator("//button[normalize-space()='Login']").click();
  await page.waitForLoadState('networkidle'); 

  // Select the first row with "Withdrawal" in the Type column
  const firstRow = page.locator("//table//tr[td[normalize-space(text())='Withdrawal']][1]");
  await firstRow.click(); // Click the first withdrawal row

  // Click the "Update" button in the selected row
  await page.locator("//button[normalize-space()='Update']").click();

  await page.locator("(//*[name()='svg'][@class='css-8mmkcg'])[3]").click();
  await page.click('text=Succeeded');
  await page.locator("//button[normalize-space()='Update Transaction']").click();

  await page.waitForTimeout(5000); 
});
