// ============================================================================
// JAVASCRIPT KEYWORDS - COMPREHENSIVE EXAMPLES
// ============================================================================

// ============================================================================
// 1. DECLARATIONS (var, let, const)
// ============================================================================

// var - function scoped, can be redeclared and updated
var name = "Alice";
var name = "Bob"; // Redeclaration allowed
name = "Charlie"; // Update allowed

// let - block scoped, cannot be redeclared but can be updated
let age = 25;
// let age = 30; // ERROR: Cannot redeclare
age = 30; // Update allowed

// const - block scoped, cannot be redeclared or updated
const PI = 3.14159;
// const PI = 3.14; // ERROR: Cannot redeclare
// PI = 3.14; // ERROR: Cannot update

// const with objects/arrays - reference cannot change, but contents can
const person = { name: "Alice", age: 25 };
person.age = 26; // Allowed - modifying properties
// person = {}; // ERROR - cannot reassign reference

// ============================================================================
// 2. CONTROL FLOW (if, else, switch, case, default, break, continue)
// ============================================================================

let score = 85;

// if, else
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch, case, default, break
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break; // Exits the switch
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}
console.log("Day:", dayName);

// continue - skip current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip when i is 2
    }
    console.log("Continue example:", i); // Prints 0, 1, 3, 4
}

// ============================================================================
// 3. LOOPS (for, while, do)
// ============================================================================

// for loop
for (let i = 0; i < 3; i++) {
    console.log("For loop iteration:", i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("While loop count:", count);
    count++;
}

// do...while loop - executes at least once
let num = 0;
do {
    console.log("Do-while number:", num);
    num++;
} while (num < 3);

// ============================================================================
// 4. FUNCTIONS (function, return, yield, async, await)
// ============================================================================

// function declaration
function greet(name) {
    return "Hello, " + name + "!"; // return - exits function with value
}
console.log(greet("Alice"));

// Generator function with yield
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log("Generator yield:", gen.next().value); // 1
console.log("Generator yield:", gen.next().value); // 2

// async function with await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log("Fetching data...");
    await delay(100); // await - pause execution until promise resolves
    console.log("Data fetched!");
    return { id: 1, data: "Sample" };
}

// Execute async function
fetchData().then(result => console.log("Async result:", result));

// ============================================================================
// 5. OBJECT-ORIENTED (class, extends, super, new, this, static, constructor)
// ============================================================================

class Animal {
    // constructor - called when creating new instance
    constructor(name) {
        this.name = name; // this - refers to current instance
    }

    // static method - called on class, not instance
    static isAnimal(obj) {
        return obj instanceof Animal;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

// extends - inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // super - calls parent constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks`;
    }
}

// new - create instance
const myDog = new Dog("Buddy", "Golden Retriever");
console.log("Dog name:", myDog.name);
console.log("Dog breed:", myDog.breed);
console.log("Dog speaks:", myDog.speak());
console.log("Is animal?", Animal.isAnimal(myDog));

// ============================================================================
// 6. EXCEPTION HANDLING (try, catch, finally, throw)
// ============================================================================

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero!"); // throw - create custom error
    }
    return a / b;
}

try {
    console.log("Division result:", divide(10, 2));
    console.log("Division result:", divide(10, 0)); // This will throw
} catch (error) {
    console.log("Caught error:", error.message); // catch - handle the error
} finally {
    console.log("Finally block always executes"); // finally - always runs
}

// ============================================================================
// 7. DATA TYPES & OPERATORS (typeof, instanceof, in, void, delete)
// ============================================================================

// typeof - returns type of operand
console.log("typeof 42:", typeof 42);           // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof true:", typeof true);       // "boolean"
console.log("typeof []:", typeof []);           // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// instanceof - checks prototype chain
console.log("instanceof Array:", [] instanceof Array);       // true
console.log("instanceof Object:", [] instanceof Object);     // true
console.log("instanceof Date:", new Date() instanceof Date); // true

// in - checks if property exists in object
const car = { make: "Toyota", model: "Camry" };
console.log("'make' in car:", "make" in car);       // true
console.log("'year' in car:", "year" in car);       // false
console.log("'toString' in car:", "toString" in car); // true (inherited)

// void - evaluates expression and returns undefined
console.log("void 0:", void 0);           // undefined
console.log("void (1+1):", void (1 + 1)); // undefined

// delete - removes property from object
const obj = { a: 1, b: 2 };
delete obj.a;
console.log("After delete:", obj); // { b: 2 }

// ============================================================================
// 8. LITERALS/VALUES (true, false, null, undefined, NaN, Infinity)
// ============================================================================

console.log("Boolean true:", true);
console.log("Boolean false:", false);
console.log("Null:", null);                    // intentional absence of value
console.log("Undefined:", undefined);          // uninitialized variable
console.log("NaN:", NaN);                      // Not a Number
console.log("Infinity:", Infinity);            // Positive infinity
console.log("Negative Infinity:", -Infinity);  // Negative infinity

// Checking for NaN
console.log("isNaN('hello'):", isNaN("hello")); // true
console.log("isNaN(123):", isNaN(123));        // false

// ============================================================================
// 9. MODULES (import, export, from, as) - Note: These work in ES modules
// ============================================================================

// In a module file (math.js), you would write:
// export const PI = 3.14159;
// export function add(a, b) { return a + b; }
// export default class Calculator { }

// In another file, you would import:
// import Calculator from './math.js';                    // default import
// import { PI, add } from './math.js';                   // named imports
// import { PI as MY_PI } from './math.js';               // aliased import
// import * as math from './math.js';                     // namespace import
// export { PI, add } from './math.js';                   // re-export

// ============================================================================
// 10. OTHER KEYWORDS (debugger, with)
// ============================================================================

// debugger - triggers breakpoint in debugging tools
function debugExample() {
    let x = 10;
    // debugger; // Uncomment to pause execution in DevTools
    x = 20;
    return x;
}

// with - extends scope chain (DEPRECATED, not recommended)
// with (document) {
//     write("Hello");  // same as document.write("Hello")
//     title = "Test";  // same as document.title = "Test"
// }

// ============================================================================
// 11. STRICT MODE RESTRICTED WORDS (let, static, yield, implements, interface,
//     package, private, protected, public, enum)
// ============================================================================

// These are reserved in strict mode or as future reserved words:
// - let, const (already covered)
// - static (covered in classes)
// - yield (covered in generators)
// - implements, interface, package, private, protected, public, enum
//   (Reserved for potential future use, cannot be used as variable names)

// Examples of what NOT to do in strict mode:
// "use strict";
// let implements = 1;   // ERROR: Reserved word
// let interface = 1;    // ERROR: Reserved word
// let package = 1;      // ERROR: Reserved word

// ============================================================================
// 12. SPECIAL CASES (eval, arguments)
// ============================================================================

// eval - evaluates string as JavaScript code (avoid when possible)
const expression = "2 + 2";
console.log("eval result:", eval(expression)); // 4

// arguments - array-like object available inside functions
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5)); // 15

// ============================================================================
// SUMMARY TABLE
// ============================================================================

const keywordSummary = {
    declarations: ["var", "let", "const"],
    controlFlow: ["if", "else", "switch", "case", "default", "break", "continue"],
    loops: ["for", "while", "do"],
    functions: ["function", "return", "yield", "async", "await"],
    objectOriented: ["class", "extends", "super", "new", "this", "static", "constructor"],
    exceptionHandling: ["try", "catch", "finally", "throw"],
    dataTypes: ["typeof", "instanceof", "in", "void", "delete"],
    literals: ["true", "false", "null", "undefined", "NaN", "Infinity"],
    modules: ["import", "export", "from", "as"],
    other: ["debugger", "with"]
};

console.log("\n=== KEYWORD SUMMARY ===");
Object.entries(keywordSummary).forEach(([category, keywords]) => {
    console.log(`${category}: ${keywords.join(", ")}`);
});
