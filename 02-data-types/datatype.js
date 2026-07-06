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
