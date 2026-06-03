// =====================================================
// Null vs Undefined in JavaScript
// =====================================================

// --- UNDEFINED ---
// `undefined` means a variable has been declared but has not been assigned a value yet.
// It is automatically assigned by JavaScript.

let name;
console.log(name);           // Output: undefined
console.log(typeof name);    // Output: "undefined"

// --- NULL ---
// `null` is an assignment value that represents "no value" or "empty value".
// It must be assigned explicitly by the programmer.

let age = null;
console.log(age);            // Output: null
console.log(typeof age);     // Output: "object" (this is a known quirk/bug in JS)

// =====================================================
// Key Differences (with examples)
// =====================================================

// 1. Assignment
let a;              // declared but not assigned  -> undefined
let b = null;       // explicitly assigned empty  -> null

console.log(a);     // undefined
console.log(b);     // null

// 2. Type check
console.log(typeof a);       // "undefined"
console.log(typeof b);       // "object"

// 3. Equality check
console.log(a == b);         // true   (loose equality)
console.log(a === b);        // false  (strict equality: different types)

// 4. Common use cases
function greet(user) {
    if (user === undefined) {
        console.log("User not provided");
    }
    if (user === null) {
        console.log("User is explicitly empty");
    }
}

greet();           // "User not provided"
greet(null);       // "User is explicitly empty"

// 5. Object property example
let person = {
    firstName: "John",
    middleName: null,       // explicitly no middle name
    lastName: "Doe"
};

console.log(person.middleName);   // null (we know there is no middle name)
console.log(person.nickname);     // undefined (property doesn't exist)

// =====================================================
// Quick Summary
// =====================================================
// | Feature        | undefined              | null                    |
// |----------------|------------------------|-------------------------|
// | Meaning        | Not assigned / missing | Explicitly empty        |
// | Who sets it?   | JavaScript (default)   | Developer (manual)      |
// | Type           | "undefined"            | "object" (quirk)        |
// | Usage          | Missing parameter      | Intentional no-value    |
// =====================================================
