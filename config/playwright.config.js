const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '../tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  outputDir: '../reports/allure-results'
});

