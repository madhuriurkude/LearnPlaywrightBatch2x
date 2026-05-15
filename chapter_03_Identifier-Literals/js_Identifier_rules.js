
// JavaScript Identifier Rules - Examples
// ==========================================
// 1. Must begin with a letter, underscore (_), or dollar sign ($)
let valid_underscore = "starts with underscore";
let $validDollar = "starts with dollar";
let validLetter = "starts with letter";

// 2. Subsequent characters may be letters, digits, underscores, or dollar signs
let name1 = "letter then digit";
let first_name = "letters and underscore";
let $item2$ = "mixed allowed characters";
let _private = "underscore start is allowed";

// 3. Cannot be a JavaScript reserved keyword
// Uncommenting any of the below will throw a SyntaxError
// let class = "invalid";
// let return = "invalid";
// let if = "invalid";
// let const = "invalid";

// 4. Case-sensitive
let myVar = "lowercase v";
let myvar = "lowercase v - different identifier";
let MyVar = "uppercase M";
console.log(myVar === myvar); // false
console.log(myVar === MyVar); // false

// 5. No spaces or special characters (except _ and $)
// let my var = "invalid";      // space not allowed
// let my-var = "invalid";      // hyphen not allowed
// let my@var = "invalid";      // @ not allowed
// let my#var = "invalid";      // # not allowed

// 6. Cannot start with a digit
// let 2cool = "invalid";       // starts with digit
// let 123abc = "invalid";      // starts with digit
let cool2 = "valid";           // digit after letter is fine
let _123 = "valid";            // underscore then digits is fine

// 7. Unicode letters and escape sequences are allowed
let π = 3.14;                  // Greek letter
let 变量 = "variable";          // Unicode characters (e.g., Chinese)
let \u0041 = "letter A via escape"; // \u0041 is 'A'

// 8. Reserved words in strict mode (examples; uncomment to see errors in strict mode)
// "use strict";
// let public = "invalid in strict";
// let private = "invalid in strict";
// let protected = "invalid in strict";
// ==========================================
    