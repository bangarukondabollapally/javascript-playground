// ------------------ Variable Declarations ------------------

var v = "function scoped";
let l = "block scoped, reassignable";
const c = "block scoped, not reassignable";

console.log(v, l, c);



// ------------------ Challenge 1 - Variable Declaration ------------------

const name = "Bangaru Konda";
const city = "Hyderabad";
let age = 20;

console.log(name, city, age);




// ------------------ Challenge 2 - Reassignment ------------------

let score = 10;

console.log(score); // before change

score = 50;

console.log(score); // after change




// ------------------ Challenge 3 - Redeclaration with let ------------------

let x = 5;

console.log(x);

// let x = 10; // SyntaxError: Redeclaration of let x
// This is because let doesn't allow redeclaration of the same variable but var does.




// ------------------ Challenge 4 - Hoisting with var ------------------

console.log(count); // Output: undefined (var is hoisted and initialized with undefined)

var count = 42;

console.log(typeof count); // Output: number (count now stores a number)
console.log(typeof "name"); // string




// ------------------ Challenge 5 - Temporal Dead Zone (TDZ) ------------------

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// Variables declared with let exist in the Temporal Dead Zone until initialized.

let b = 10;




// ------------------ Challenge 6 - const ------------------

const pi = 3.14;

// pi = 22 / 7;
// TypeError: Assignment to constant variable.

console.log(pi);




// ------------------ Bonus Challenge - Block Scope ------------------

const a = 10;

{
    const a = 20;
    console.log(a); // 20 (inner block-scoped variable shadows the outer variable)
}

console.log(a); // 10



// ------------------ typeof ------------------

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined