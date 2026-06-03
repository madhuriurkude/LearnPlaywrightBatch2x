// =====================================================
// Lab 26: All Number Literals in JavaScript
// =====================================================

// --- 1. INTEGER ---
// Whole numbers without a fractional part.
let integer = 42;
console.log("Integer:", integer);                   // 42
console.log("Type:", typeof integer);               // "number"

// --- 2. FLOATING POINT (Decimal) ---
// Numbers with a fractional part.
let floatNum = 3.14;
console.log("Float:", floatNum);                    // 3.14

// --- 3. NEGATIVE NUMBERS ---
let negative = -10;
console.log("Negative:", negative);                 // -10

// --- 4. SCIENTIFIC (EXPONENTIAL) NOTATION ---
// e or E means "times ten to the power of".
let big = 5e3;          // 5 * 10^3  = 5000
let small = 5e-3;       // 5 * 10^-3 = 0.005
console.log("Scientific (5e3):", big);              // 5000
console.log("Scientific (5e-3):", small);           // 0.005

// --- 5. HEXADECIMAL (Base 16) ---
// Prefix with 0x or 0X. Digits 0-9 and A-F.
let hex = 0xFF;
console.log("Hexadecimal (0xFF):", hex);            // 255

// --- 6. OCTAL (Base 8) ---
// Prefix with 0o or 0O. Digits 0-7.
let octal = 0o77;
console.log("Octal (0o77):", octal);                // 63

// --- 7. BINARY (Base 2) ---
// Prefix with 0b or 0B. Digits 0 and 1.
let binary = 0b1010;
console.log("Binary (0b1010):", binary);            // 10

// --- 8. SPECIAL NUMERIC VALUES ---

// Infinity
let posInf = Infinity;
let negInf = -Infinity;
console.log("Infinity:", posInf);                    // Infinity
console.log("-Infinity:", negInf);                 // -Infinity

// Division by zero results in Infinity
console.log("1 / 0:", 1 / 0);                      // Infinity
console.log("-1 / 0:", -1 / 0);                    // -Infinity

// NaN (Not-a-Number) - Invalid numeric operation
let notANumber = NaN;
console.log("NaN:", notANumber);                   // NaN
console.log("0 / 0:", 0 / 0);                     // NaN
console.log("'abc' * 2:", "abc" * 2);             // NaN

// --- 9. NUMBER CONSTANTS ---
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.EPSILON:", Number.EPSILON);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// --- 10. BIGINT ---
// BigInt can represent integers larger than Number.MAX_SAFE_INTEGER.
// Created by appending 'n' to an integer literal.
let bigIntLiteral = 123456789012345678901234567890n;
console.log("BigInt:", bigIntLiteral);              // 123456789012345678901234567890n
console.log("Type of BigInt:", typeof bigIntLiteral); // "bigint"

let anotherBigInt = BigInt(9007199254740991);
console.log("BigInt(9007199254740991):", anotherBigInt);

// --- 11. CHECKING FOR NUMBERS ---
console.log("Number.isFinite(100):", Number.isFinite(100));       // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));               // true
console.log("Number.isInteger(5):", Number.isInteger(5));         // true
console.log("Number.isInteger(5.5):", Number.isInteger(5.5));    // false

// --- 12. PARSE FROM STRING ---
console.log("parseInt('100'):", parseInt("100"));                 // 100
console.log("parseInt('100', 16):", parseInt("100", 16));         // 256 (parsed as hex)
console.log("parseFloat('3.14'):", parseFloat("3.14"));           // 3.14

// --- 13. PITFALLS / QUIRKS ---
console.log("0.1 + 0.2:", 0.1 + 0.2);              // 0.30000000000000004 (floating point precision issue)
console.log("NaN === NaN:", NaN === NaN);          // false (NaN is not equal to itself)
console.log("isNaN('hello'):", isNaN("hello"));    // true (coerces and then checks)
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (does not coerce)

// =====================================================
// Summary
// =====================================================
// JavaScript has one Number type (IEEE 754 double-precision 64-bit).
// It supports integer, float, hex, octal, binary, scientific notation,
// and special values: Infinity, -Infinity, NaN.
// BigInt is a separate primitive for arbitrarily large integers.
// =====================================================
