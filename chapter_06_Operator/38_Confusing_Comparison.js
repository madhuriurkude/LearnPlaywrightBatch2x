// =============================================================================
// 38_Confusing_Comparison.js
// Understanding == (Loose Equality) vs === (Strict Equality) in JavaScript
// =============================================================================

console.log("=== STRICT EQUALITY (===) vs LOOSE EQUALITY (==) ===\n");

// =============================================================================
// 1. BASIC DIFFERENCE
// =============================================================================
console.log("--- 1. Basic Difference ---");

// === checks VALUE and TYPE (no type coercion)
console.log("5 === 5:", 5 === 5);         // true  (same value, same type)
console.log("5 === '5':", 5 === '5');     // false (same value, different type)

// == checks VALUE only (performs type coercion if types differ)
console.log("5 == 5:", 5 == 5);           // true  (same value, same type)
console.log("5 == '5':", 5 == '5');     // true  (string '5' is coerced to number 5)

// =============================================================================
// 2. THE CLASSIC TRANSITIVITY "BROKEN" CASE
// =============================================================================
console.log("\n--- 2. The Transitivity 'Broken' Case ---");

console.log("0 == '':", 0 == '');         // true  (empty string coerced to 0)
console.log("0 == '0':", 0 == '0');     // true  (string '0' coerced to number 0)
console.log("'' == '0':", '' == '0');   // false (both strings, direct comparison)

// This breaks mathematical transitivity:
// If a == b and b == c, then a == c should be true...
// But: 0 == '' (true), 0 == '0' (true), but '' == '0' (false)!
console.log("\nTransitivity broken?");
console.log("0 == '' AND 0 == '0', but '' == '0' is", '' == '0');

// =============================================================================
// 3. MORE CONFUSING COMPARISONS WITH ==
// =============================================================================
console.log("\n--- 3. More Confusing Comparisons with == ---");

// null and undefined
console.log("null == undefined:", null == undefined);       // true  (special case)
console.log("null === undefined:", null === undefined);     // false (different types)

// null vs 0
console.log("null == 0:", null == 0);                       // false (null only equals undefined with ==)
console.log("null > 0:", null > 0);                         // false (null coerced to 0)
console.log("null >= 0:", null >= 0);                       // true  (null coerced to 0)

// undefined vs 0
console.log("undefined == 0:", undefined == 0);             // false
console.log("undefined > 0:", undefined > 0);              // false (undefined coerced to NaN)
console.log("undefined >= 0:", undefined >= 0);            // false

// =============================================================================
// 4. EMPTY VALUES BEHAVIOR
// =============================================================================
console.log("\n--- 4. Empty Values Behavior ---");

console.log("'' == false:", '' == false);                  // true  (both coerce to 0)
console.log("'' === false:", '' === false);                  // false (different types)

console.log("0 == false:", 0 == false);                     // true  (both coerce to 0)
console.log("0 === false:", 0 === false);                   // false (different types)

console.log("'0' == false:", '0' == false);               // true  (string '0' → number 0 → boolean false)
console.log("'0' === false:", '0' === false);               // false (different types)

console.log("'0' == 0:", '0' == 0);                         // true
console.log("'0' === 0:", '0' === 0);                       // false

// =============================================================================
// 5. ARRAY AND OBJECT COMPARISONS
// =============================================================================
console.log("\n--- 5. Array and Object Comparisons ---");

console.log("[] == false:", [] == false);                   // true  (array coerced to empty string → 0 → false)
console.log("[] === false:", [] === false);                 // false

console.log("[] == 0:", [] == 0);                           // true  (array → empty string → 0)
console.log("[] === 0:", [] === 0);                         // false

console.log("[] == '':", [] == '');                         // true  (array coerced to empty string)
console.log("[] === '':", [] === '');                       // false

console.log("[1] == '1':", [1] == '1');                   // true  (array coerced to string '1')
console.log("[1] === '1':", [1] === '1');                 // false

console.log("{} == '[object Object]':", {} == '[object Object]');   // true  (object coerced to string)
console.log("{} === '[object Object]':", {} === '[object Object]'); // false

// =============================================================================
// 6. NaN (NOT A NUMBER) - A SPECIAL CASE
// =============================================================================
console.log("\n--- 6. NaN Behavior ---");

console.log("NaN == NaN:", NaN == NaN);                     // false (NaN is never equal to anything, even itself!)
console.log("NaN === NaN:", NaN === NaN);                   // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true  (use this to check for NaN)

// =============================================================================
// 7. PRIMITIVE VS OBJECT WRAPPERS
// =============================================================================
console.log("\n--- 7. Primitive vs Object Wrappers ---");

console.log("'hello' == new String('hello'):", 'hello' == new String('hello'));     // true  (object coerced to primitive)
console.log("'hello' === new String('hello'):", 'hello' === new String('hello'));   // false (different types)

console.log("5 == new Number(5):", 5 == new Number(5));                             // true
console.log("5 === new Number(5):", 5 === new Number(5));                           // false

// =============================================================================
// 8. THE RULE OF THUMB
// =============================================================================
console.log("\n--- 8. Best Practice ---");
console.log("ALWAYS use === (strict equality) to avoid unexpected type coercion!");
console.log("Use == only when you intentionally want type coercion (rare).");

// =============================================================================
// 9. QUICK REFERENCE: == COERCION TABLE
// =============================================================================
console.log("\n--- 9. Quick Reference Table ---");
console.log("Expression            | == Result | === Result");
console.log("----------------------|-----------|------------");
console.log("5 == '5'              | true      | false");
console.log("0 == ''               | true      | false");
console.log("0 == '0'              | true      | false");
console.log("'' == '0'             | false     | false");
console.log("null == undefined     | true      | false");
console.log("null == 0             | false     | false");
console.log("0 == false            | true      | false");
console.log("'' == false           | true      | false");
console.log("[] == false           | true      | false");
console.log("[] == 0               | true      | false");
console.log("NaN == NaN            | false     | false");
console.log("{} == '[object Object]'| true     | false");
