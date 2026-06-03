//Template literally

let firstName="Madhuri";
let fullName=`Hi ${firstName} Urkude`;

console.log(fullName);

let env="staging";
env="prod";
const userId=12345;
const apiUrl=`https://api-${env}.takioon.com/users/${userId}`;
console.log(apiUrl);

//Playwright
const rowIndex=3;
const columnName="email";
await page.locator(`[data-row="${rowIndex}"][data-col="${columnName}"]`).click();

//Logs
const testName="Login Test";
const status="FAILED";
const duration=2.3;
console.log(`[${status}]${testName}complete in ${duration}s`);

const testCase="checkout_flow";
const timestamp=Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

const userName="madhuri";
const role="admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);