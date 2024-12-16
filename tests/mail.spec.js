import { test, expect } from '@playwright/test';
import MailosaurClient from 'mailosaur';

// Initialize Mailosaur client with your API key
const mailosaur = new MailosaurClient('your-api-key'); // Use your Mailosaur API key
const serverId = 'jqws3qxe'; // Replace with your server ID
const emailAddress = `sharmin.huq+${new Date().getTime()}@${serverId}.mailosaur.net`;

test.describe('Complete Email Verification Flow', () => {
  test('Navigate to Latest Email and Extract Verification Link', async ({ page }) => {
    // Step 1: Log into your Mailosaur inbox (you might need to adjust for authentication if necessary)
    await page.goto('https://mailosaur.com/app');
    await page.waitForTimeout(3000); // Adjust this to wait for Mailosaur to load

    // Step 2: Click on "Go to inbox"
    await page.locator('text=Go to inbox').click();
    await page.locator("(//input[@id='email'])[1]").fill('sharmin.huq@aitrade.ai');
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='password']").fill("Bangladesh1#");
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(3000); // Wait for inbox to load

    // Step 3: Wait for email list to load and find the first email
    const emails = await page.locator('.email-item');
    const emailCount = await emails.count();
    console.log(`Found ${emailCount} emails.`);

    if (emailCount > 0) {
      await emails.first().click(); // Click on the most recent email
    } else {
      throw new Error('No emails found.');
    }

    // Step 4: Wait for email content to load
    await page.waitForSelector('.email-body', { state: 'attached' });

    // Step 5: Extract the email body and find the verification link (URL)
    const emailBody = await page.locator('.email-body').textContent(); // Locate the email body
    const verificationLinkMatch = emailBody.match(/https?:\/\/[^\s]+/); // Use regex to find any URL

    if (!verificationLinkMatch) {
      throw new Error('Verification link not found in the email body.');
    }

    const verificationLink = verificationLinkMatch[0]; // Extract the verification link
    console.log('Verification Link:', verificationLink);

    // Step 6: Navigate to the verification link
    await page.goto(verificationLink); // Visit the link

    // Step 7: Wait for the page to indicate successful verification
    await page.waitForSelector('text=Your account has been verified', { timeout: 30000 });

    // Step 8: Verify success message
    const successMessageVisible = await page.locator('text=Your account has been verified').isVisible();
    expect(successMessageVisible).toBe(true); // Ensure the verification message is visible

    console.log('Email verification completed successfully!');
  });
});
