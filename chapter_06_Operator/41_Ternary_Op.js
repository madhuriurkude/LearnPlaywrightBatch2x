// let rajkumar_age = 18;
// let rj_will_goa = rajkumar_age>=18 ? "RJ will go Goa" : "No Goa";
// console.log(rj_will_goa)

let a = 10;
a+= 10;
console.log(a)
// a =-10; this doen't  // a =+10; this doen't 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "PASS✔️" : "Fail❌";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl)

let isCI = true;
let browserMode = isCI ? "headless" : "headdead";

console.log("Launching browser in:",browserMode,"mode");

let responseTime = 850 //ms
let sla = 1000;  //ms
let slaStatus = responseTime <= sla ? "Within SLA✔️": "SLA Breakdown❌";
console.log(`Response:${responseTime}ms-${slaStatus}`);

let condition = true;
let isSKMale = condition ? "true " : "false";
console.log(isSKMale)

// Nested Ternary
// Multiple Conditions
let age = 26;
let is_pramod_goa = age>26 ? "Yes he will Go GOA" : "No he will not go GOA";
console.log(is_pramod_goa)

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ?"age_pramod > 26" ? "Drink" : "No Drink" :"No Goa";
console.log(is_pramod_d);

//...Interview Question....
let statusCode = 404;
let category = 
    statusCode < 300 ? "Sucess" :
        statusCode < 400 ? "Redirect" :
             statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}:${category}`)   

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);





