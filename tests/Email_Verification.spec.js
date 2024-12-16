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
    await page.locator("//input[@id='email']").fill('sharmin.huq+Tota1@jqws3qxe.mailosaur.net'); // Use the dynamic email
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
    await page.locator("//button[normalize-space()='Subscribe']").click();
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 rounded-full mt-3'])[1]").click();

   
    // Step 2: Click on the "Go to inbox" button in Mailosaur
    await page.goto('https://mailosaur.com/app');
    await page.locator("//input[@id='email']").fill('sharmin.huq@aitrade.ai');
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='password']").fill("Bangladesh1#");
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator('text=Go to inbox').click(); // Assuming "Go to inbox" is visible as text
    await page.locator("//body[1]/div[2]/div[1]/div[1]/div[5]/main[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]").click();

    await page.waitForTimeout(3000); // Wait for inbox page to load

    // Step 3: Fetch the first email in the inbox
    const firstEmailLocator = page.locator('//div[@class="email-item"][1]'); // Locator for the first email
    await firstEmailLocator.click(); // Click on the first email
    // Wait for the email content to load
    await page.waitForTimeout(3000);

    // Step 4: Extract the verification link from the email content
    const emailBody = await page.locator('.email-body').textContent(); // Assuming email body is within a .email-body element
    const verificationLinkMatch = emailBody.match(/https?:\/\/[^\s]+/); // Match URLs in the email body

    if (!verificationLinkMatch) {
      throw new Error('Verification link not found in the email body.');
    }

    const verificationLink = verificationLinkMatch[0];
    console.log('Verification Link:', verificationLink);

    // Step 5: Navigate to the verification link
    await page.goto(verificationLink); // Visit the link

    // Wait for the page to indicate successful verification
    await page.waitForSelector('text=Your account has been verified', { timeout: 30000 });

    // Step 6: Verify success message
    const successMessageVisible = await page.locator('text=Your account has been verified').isVisible();
    expect(successMessageVisible).toBe(true); // Ensure the verification message is visible

    console.log('Email verification completed successfully!');
  });
});