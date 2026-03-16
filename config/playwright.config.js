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
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'off'
  },
  workers: 1,
  outputDir: '../reports/allure-results'
});

