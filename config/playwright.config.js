const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'],
    ['allure-playwright', {
      outputFolder: 'reports/allure-results',
      overwrite: true
    }]
  ],
  use: {
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'off'
  },
  workers: 1
});
