import {test , expect} from '@playwright/test';
//import Ajv from 'ajv';
// test('Post Call API', async ({request}) => {    
// const response =  await request.get(
//     "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'x-api-key':'nWQg9AxqJ9mw0otvuUi2KK3hKZnG48bvBPeEJQGW'
//       }    
//     }
// );
    
// });
 
test('Get Call API', async ({ request }) => {
  const response = await request.get(
    "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': 'nWQg9AxqJ9mw0otvuUi2KK3hKZnG48bvBPeEJQGW'
      }
    }
  );
  console.log(await response.json());
  expect(response.status()).toBe(200);

});

// test('Schema Validation - Get Call API', async ({ request }) => {
//   const response = await request.get(
//     "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'x-api-key': 'nWQg9AxqJ9mw0otvuUi2KK3hKZnG48bvBPeEJQGW'
//       }
//     }
//   );
//   const responseBody = await response.json();
//   console.log('========================');
//   console.log(responseBody);
//   console.log('========================');
  
//   const schema = {
//     type: "object",
//     properties: {
//       symbol: { type: "string" },
//       price: { type: "string"},
//       timestamp: { type: "number" },
      
//     },
//     required: ["symbol", "price","timestamp"]
      
//   };
  
//   const ajv = new Ajv();
//   const validate = ajv.compile(schema);
//   const valid = validate(responseBody);
  
//   if (!validate(responseBody)) {
//   console.log(validate.errors);
// }
  
//   expect(valid).toBe(true);


// });



// test('Validate crypto API schema', async ({ request }) => {

//   const response = await request.get(
//     "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'x-api-key': 'nWQg9AxqJ9mw0otvuUi2KK3hKZnG48bvBPeEJQGW'
//       }

//     }
//   );

//   const data = await response.json();
//   console.log(data);
//   const schema = {
//     type: "object",
//     properties: {
//       error: { type: "string" }
      
//     },
//     required: ["error"]
//   };

//   const ajv = new Ajv({
//     allowUnionTypes: true
//   });
//   //this will allow union of 2 or more data types . in price its string or number
//   const validate = ajv.compile(schema);
//   expect(validate(data)).toBe(true);
// });