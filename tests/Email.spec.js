import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";

// Initialize Mailosaur client with your API key
const mailosaur = new MailosaurClient("SaIP4ZXBrmU61yRBrVnSAoPfoTa0ZQbA");

// Define the Mailosaur server and email address
const serverId = "jqws3qxe";
const emailAddress = `sharmin.huq+mailV@${serverId}.mailosaur.net`;

// Timestamp for unique email if needed
const timestamp = new Date().toISOString().replace(/[:.-]/g, "");

test.describe("Complete Mail Verification Flow", () => {
  test("Complete Signup and Verify Email", async ({ page }) => {
    // **Step 1**: Visit the website and fill in the signup form
    await page.goto("https://www-develop.backtestdata.com/");
    await page.locator("(//span[contains(text(),'Pricing')])[1]").click();
    await page.locator("(//button[contains(text(),'Buy Now')])[2]").click();

    // Fill in the form with test details
    await page.locator("//input[@id='email']").fill('sharmin.huq+{ho}@jqws3qxe.mailosaur.net');
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
    await page.locator("(//button[normalize-space()='Subscribe'])[1]").click();
    await page.waitForTimeout(3000);
    await page.locator("(//button[@class='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0130B7] text-primary-foreground hover:!bg-blue-700 h-10 px-4 py-2 rounded-full mt-3'])[1]").click();

    // Wait for the page to process the order
    await page.waitForTimeout(10000);

    await page.goto("https://mailosaur.com/app/servers/jqws3qxe/messages/inbox")
    await page.locator("https://u33809073.ct.sendgrid.net/ls/click?upn=u001.4qbIxdgpzzPBUxbyMPGypbLYlRQCfRtc0VzRbBzsw3t6f9WjH2YO0Qx8NzWju62RpenDAmbb-2F8uy0VSVO4KIjP7Jb-2FX5SE3GEe-2BlZNMLIZ7pj12-2B6Wm9CX60Zx51dWrIKXBo3Ni-2BjuruE1KysBYe1Q-2FJXzmRTA9x6vPVTZj9n2csJwX8FtHd3SE9mbLbwvSnUKds4OttC7e1knth8i-2BC48HC7-2FsS4Eri4S2-2Fis1fz6-2F4oRcywhk7QGM764Lg-2BadX-2BZyaE4rKI2rSjWY6pGwSow-3D-3Djqjf_haKti60o1nT25gQO7KwQjMs2uJk1f63-2BazK9F-2FWPXu9od8FWoin6U1LVMfrtOhzNflqHIW-2FO-2Fzyi1Lam-2BmvlTIfvuIMCZr64Dy-2FWFB-2BT-2FsJvbKKtYodLUm5gwVSYMxXX-2FJXhnr0GbLugPcYkXncCSTzJxw8qPLvfTeAFCSEIsSxgyx3xIjKG0Do3kUxIhXSJw-2F5lxFa3hKAqzSoVVL3llm4oxlusl0DvuZh0DHhjYGI9KOKsmnYoMB02WhPSUuQ-2BfXXKpORD4Xr6SeQdA94SWfCwxLUR17eeQ-2BydLM8XdEeKmOwm5UnaiJiemdS4Ovp84TMyDd-2FWZvdWM8OmKGiSzd4x6Izx2ofS5Iw73aH2WDg-3D").click();
    await page.locator("(//input[@id='fullName'])[1]").fill('Sharmin Huq');
    await page.locator("(//input[@id='password'])[1]").fill("Bangladesh1#");
    await page.locator("(//input[@id='repeatPassword'])[1]").fill('Bangladesh1#')

    // **Step 2**: Fetch the email using Mailosaur
    console.log("Waiting for the email...");
    const email = await mailosaur.messages.get(
      serverId,
      { sentTo: 'sharmin.huq@jqws3qxe.mailosaur.net' },
      { timeout: 60000 } // Wait up to 60 seconds for the email
    );

    // Log email details for debugging
    console.log("Email Subject:", email.subject);
    console.log("Sender Email:", email.from[0]?.email);
    console.log("Email Body:", email.text.body);  // Log the email body for reference

    // **Step 3**: Extract the verification link from the email body
    const emailBody = email.text.body;

    // Extract the verification link (assuming it's a URL in the email body)
    const verificationLinkMatch = emailBody.match(/https?:\/\/[^\s]+/); // Match the URL
    if (!verificationLinkMatch) {
      throw new Error("Verification link not found in the email body.");
    }

    const verificationLink = verificationLinkMatch[0];
    console.log("Verification Link Found:", verificationLink);

    // **Step 4**: Navigate to the verification link using Playwright
    await page.goto('https://u33809073.ct.sendgrid.net/ls/click?upn=u001.4qbIxdgpzzPBUxbyMPGypbLYlRQCfRtc0VzRbBzsw3t6f9WjH2YO0Qx8NzWju62RpenDAmbb-2F8uy0VSVO4KIjP7Jb-2FX5SE3GEe-2BlZNMLIZ7pj12-2B6Wm9CX60Zx51dWrIKXBo3Ni-2BjuruE1KysBYe1Q-2FJXzmRTA9x6vPVTZj9n2csJwX8FtHd3SE9mbLbwvSnUKds4OttC7e1knth8i-2BC48HC7-2FsS4Eri4S2-2Fis1fz6-2F4oRcywhk7QGM764Lg-2BadX-2BZyaE4rKI2rSjWY6pGwSow-3D-3DlAbE_haKti60o1nT25gQO7KwQjMs2uJk1f63-2BazK9F-2FWPXu9od8FWoin6U1LVMfrtOhzNflqHIW-2FO-2Fzyi1Lam-2BmvlTIfvuIMCZr64Dy-2FWFB-2BT-2FsJvbKKtYodLUm5gwVSYMxXX-2FJXhnr0GbLugPcYkXncCSTzJxw8qPLvfTeAFCSEIsSxgyx3xIjKG0Do3kUxIhXSJw-2F5lxFa3hKAqzSoVVL3lltHkPzogNebhvPBjloHD9fsZRsQlcVMmlKTlxDw4i0PWj6ELu1nLZ1o1PUy4JbM37gUER0y0f-2BpXJ2DRrBFr-2FUcOm1ToVrsMSbFPpa1vSebikXLI8YDC1irW42Dmpq6Ncrx-2FIjwgrDPMA26X67kAQh8-3D');

    // Wait for a successful response, e.g., a confirmation message
    await page.waitForSelector("text=Your account has been verified", { timeout: 30000 });

    // **Step 5**: Verify the account has been verified
    const successMessage = await page.locator("text=Your account has been verified").isVisible();
    expect(successMessage).toBe(true); // Assert that the success message is visible

    console.log("Email verification completed successfully!");
  });
});
