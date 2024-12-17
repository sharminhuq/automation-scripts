import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";

// Initialize Mailosaur client with your API key
const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");

// Define the Mailosaur server and dynamic email address
const serverId = "jqws3qxe";
const emailAddress = `sharmin.huq+${new Date().getTime()}@${serverId}.mailosaur.net`; // Unique email with timestamp for each test

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
    // **Step 1**: Visit the website and fill in the signup form
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click();

    // Fill in the form with test details
    await page.locator("//input[@id='email']").fill('sharmin.huq+so@jqws3qxe.mailosaur.net'); // Use the dynamic email
    await page.locator("//input[@id='cardName']").fill("Sharmin Huq");
    await page.locator("//input[@id='cardNumber']").fill("4242 4242 4242 4242");
    await page.locator("//input[@id='expiryDate']").fill("02/34");
    await page.locator("//input[@id='cvc']").fill("456");
    await page.click("(//div[@class='react-select__input-container css-ackcql'])[1]");
    await page.click("text=Bangladesh");
    await page.locator("//input[@id='city']").fill("Panthapath");
    await page.locator("//input[@id='state']").fill("Dhaka");
    await page.locator("//input[@id='postCode']").fill("34567");
    await page.locator("//input[@id='check']").check();
    await page.locator("//button[normalize-space()='Confirm Payment']").click();
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 rounded-full mt-3'])[1]").click();

   
    // Step 2: Click on the "Go to inbox" button in Mailosaur
    await page.goto('https://mailosaur.com/app');
    await page.locator("//input[@id='email']").fill('sharmin.huq@aitrade.ai');
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='password']").fill("Bangladesh1#");
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator('text=Go to inbox').click(); // Assuming "Go to inbox" is visible as text
    await page.locator("//tbody/tr[1]/td[2]/div[1]").click();
    await page.locator("//a[normalize-space()='Verify Email']").click();
    await page.waitForTimeout(10000);
    
   
    await page.locator("//input[@id='fullName']").fill("Sharmin Huq")
    await page.locator("//input[@id='password']").fill("Bangladesh1#")
    await page.locator("//input[@id='repeatPassword']").fill("Sharmin Huq")
    await page.locator("//button[normalize-space()='Complete Registration']").click("")

    await page.waitForTimeout(5000);
    // await page.goto('https://www-develop.backtestdata.com/');
    // await page.locator("(//span[@class='flex !text-start !justify-start lg:justify-center items-center pt-5'])[1]").click();
    // await page.locator("//a[contains(@href,'/auth/login/')]//div[@role='link']").click();
    await page.locator("//input[@id='username']").fill('sharmin.huq+so5@jqws3qxe.mailosaur.net');
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("(//span[@class='pl-2'])[1]").click()
    await page.locator("//button[contains(text(),'Logout')]").click();

  
  });
});