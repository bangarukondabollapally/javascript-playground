// ------------------ Primitive Data Types ------------------

// String - Sequence of characters
let name = "John";

// Number - Integer or decimal values
let age = 20;
let price = 99.99;

// Boolean - Represents true or false
let isLoggedIn = true;

// Undefined - Variable declared but not assigned a value
let city;
console.log(city); // undefined

// Null - Intentionally represents the absence of a value
let user = null;

// BigInt - Used for integers larger than Number can safely represent
let num = Number.MAX_SAFE_INTEGER;
console.log(num); // 9007199254740991

let numPlusTwo = num + 2;
console.log(numPlusTwo); // Precision becomes unreliable beyond MAX_SAFE_INTEGER

let population = 1234567890123456789012345678901234567890n; // No precision loss
console.log(population); // 1234567890123456789012345678901234567890n

// Symbol - Creates a unique identifier
let id = Symbol("id");
let anotherId = Symbol("id");

console.log(id === anotherId); // false (every Symbol is unique)

// ------------------ Reference Data Types ------------------

// Object
let person = {
name: "John",
age: 20
};

// Array
let numbers = [1, 2, 3];

// Function
function greet() {}

// ------------------ Primitive vs Reference Values ------------------

// Primitive values are copied independently
let a = 12;
let b = a;

console.log(a); // 12
console.log(b); // 12

a += 2;

console.log(a); // 14
console.log(b); // 12 (Independent copy)

// Reference values are copied by reference
let c = [1, 2, 3];
let d = c;

console.log(c); // [1, 2, 3]
console.log(d); // [1, 2, 3]

c.push(5);

console.log(c); // [1, 2, 3, 5]
console.log(d); // [1, 2, 3, 5] (Same reference)

// ------------------ typeof ------------------

console.log(typeof "JavaScript"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical JavaScript bug)
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () {}); // function
console.log(typeof 123n); // bigint





// ------------------ Challenge 1 - typeof ------------------

console.log(typeof "JavaScript"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical JavaScript bug)
console.log(typeof 123n); // bigint



// ------------------ Challenge 2 - Type Coercion ------------------

console.log(null + 1); // null coerces to 0, so 0 + 1 = 1
console.log("5" + 3); // "5" is a string, so it concatenates: "53"
console.log("5" - 3); // "5" is converted to a number, so 5 - 3 = 2
console.log(true + false); // true coerces to 1, false to 0, so 1 + 0 = 1
console.log(undefined + 1); // undefined coerces to NaN, so NaN + 1 = NaN



// ------------------ Challenge 3 - Truthy vs Falsy ------------------

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean("0")); // true (non-empty string)
console.log(Boolean("false")); // true (non-empty string)
console.log(Boolean([])); // true (empty array is still an object)
console.log(Boolean({})); // true (empty object is still an object)



// ------------------ Challenge 4 - Primitive vs Reference Values ------------------

let var1 = 10;
let var2 = var1;

var1++;

console.log(var1); // 11
console.log(var2); // 10

// Primitive values create an independent copy.
// Changing var1 does not affect var2.

let arr1 = [1, 2];
let arr2 = arr1;

arr1.push(3);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// Arrays are reference types.
// Both variables reference the same array.



// ------------------ Challenge 5 - Loose vs Strict Equality ------------------

console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (compares value and type)

console.log(null == undefined); // true
console.log(null === undefined); // false



// ------------------ Bonus Challenge - NaN ------------------

console.log(typeof NaN); // number
console.log("hello" - 1); // NaN
console.log(0 / 0); // NaN