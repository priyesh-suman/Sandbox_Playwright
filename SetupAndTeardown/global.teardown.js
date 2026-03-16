

import { test} from '@playwright/test';
async function globalTeardown()
{
  console.log('..........global teardown...........');
  process.env["FULLTOKEN"]="";
  // Initialize the database
};

export default globalTeardown;