import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";

// Initialize Mailosaur client with your API key
const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");

// Define the Mailosaur server and dynamic email address
const serverId = "jqws3qxe"; // Ensure this is your actual Mailosaur server ID
const emailAddress = `sharmin.huq+${new Date().getTime()}@${serverId}.mailosaur.net`; // Unique email with timestamp for each test

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
    // **Step 1**: Visit the website and fill in the signup form
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click();

    // Fill in the form with test details
    await page.locator("//input[@id='email']").fill(emailAddress); // Use the dynamic email
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

    // **Step 2**: Wait for the email in Mailosaur
    // You should replace this with Mailosaur code to wait for an email
    const email = await mailosaur.messages.search({
      sentTo: emailAddress,
      limit: 1,
    });

    // Make sure email is found and click the verification link
    const verificationLink = email.items[0].html.body.match(/https?:\/\/[^\s]+/)[0];
    console.log("Verification Link:", verificationLink);

    // **Step 3**: Visit the verification link from the email
    await page.goto(verificationLink); // Visit the link

    // Wait for the page to indicate successful verification
    await page.waitForSelector('text=Your account has been verified', { timeout: 30000 });

    // **Step 4**: Log in with the same credentials
    await page.goto('https://www-develop.backtestdata.com/');
    await page.locator("//input[@id='username']").fill(emailAddress);
    await page.waitForSelector("//input[@id='password']");
    await page.locator("//input[@id='password']").fill('Bangladesh1#');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(10000);

    // **Step 5**: Perform logout
    await page.locator("(//span[@class='pl-2'])[1]").click();
    await page.locator("//button[contains(text(),'Logout')]").click();

    // End of test
    console.log('Email verification completed successfully!');
  });
});
