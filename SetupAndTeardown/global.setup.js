

import { test } from '@playwright/test';
async function GlobalSetup()
{
 console.log('..........global Setup...........');
  process.env["FULLTOKEN"]="Priyesh Suman";
  // Initialize the database
};

export default GlobalSetup;