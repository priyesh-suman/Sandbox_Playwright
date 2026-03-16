

import { test as setup } from '@playwright/test';

setup('Setup Test ', async ({ }) => {
  console.log('creating new setup...');
  process.env["TOKEN"]="Priyesh";
  // Initialize the database
});