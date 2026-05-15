var name="Pramod";

//camel case
var firstName="Pramod";
var lastName="Dutta";

//snake case
var first_name="Amit";




// ==========================================
// JavaScript Identifier Naming Conventions
// ==========================================

// 1. camelCase
//    First word lowercase, subsequent words capitalized.
//    Commonly used for variables and functions in JS.
let firstName = "Alice";
let totalScore = 100;
function calculateTax(amount) {
    return amount * 0.15;
}

// 2. PascalCase
//    Every word starts with a capital letter.
//    Commonly used for classes and constructors.
class UserProfile {
    constructor(userName) {
        this.userName = userName;
    }
}
let MyComponent = () => {};

// 3. snake_case
//    All lowercase with underscores between words.
//    Common in Python, sometimes used in JS for constants or config keys.
let user_name = "Bob";
let total_score = 85;
let api_endpoint = "https://api.example.com";

// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
//    All uppercase with underscores.
//    Convention for constants and environment variables.
const MAX_RETRIES = 3;
const API_KEY = "abc123";
const DATABASE_URL = "postgres://localhost/db";

// 5. kebab-case
//    All lowercase with hyphens. NOT valid as a JavaScript identifier!
//    Uncommenting the line below will throw a SyntaxError.
// let user-name = "invalid";
// However, it is valid in strings, object keys (quoted), HTML attributes, CSS, etc.
let dataAttribute = "data-user-name"; // string value is fine
let cssClass = "main-container";      // string value is fine

// ==========================================
// Summary of Cases
// ==========================================
console.log("camelCase examples:", { firstName, totalScore, calculateTax: calculateTax(100) });
console.log("PascalCase examples:", { UserProfile, MyComponent });
console.log("snake_case examples:", { user_name, total_score, api_endpoint });
console.log("SCREAMING_SNAKE_CASE examples:", { MAX_RETRIES, API_KEY, DATABASE_URL });
console.log("kebab-case examples (as strings):", { dataAttribute, cssClass });
