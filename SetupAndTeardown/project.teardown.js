

import { test as teardown } from '@playwright/test';

teardown('Deardown Test ', async ({ }) => {
  
  console.log('Shutdown existing setup...');
  console.log(process.env.TOKEN);
  process.env["TOKEN"]="";
  
  console.log('Shutdown completed...');
  console.log(process.env.TOKEN);
});