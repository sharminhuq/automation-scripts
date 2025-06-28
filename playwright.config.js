const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false, // Set to true if you want headless mode
      },
    },
  ],
  testDir: './tests', // Directory where your test files are located
});
