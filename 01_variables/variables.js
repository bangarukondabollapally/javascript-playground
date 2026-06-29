// 1
const name = "Bangaru Konda";
const city = "Hyderabad";
let age = 20;
console.log(name, city, age);


// 2
let x = 5;
console.log(x);
// let x = 10; // SyntaxError: redeclaration of let x 
// This is because let doesn't allow redeclaration of same variable but var does


// 3
console.log(count); // Output: undefined; because the var is hoisted and is initialized with undefined
var count = 42;
console.log(typeof(count)) // Output: number; as the var is assigned with a number value


// 4
const person = {
    name: "John"
};
person.name = "Doe"; // allowed since the object is getting updated
// person = {}; // TypeError: Assignment to constant variable is not allowed since the const variable cannot be reassigned to a different object
console.log(person);


// 5
//console.log(b); // ReferenceError: Cannot access 'b' before initialization
// Variables declared with let exist in the Temporal Dead Zone until initialized.
let b = 10; 


// 6
const nums = [1,2,3];
nums.push(5); // Allowed since the array is getting updated and not reassigned
//nums = [1,2,3,4]; // TypeError: Assignment to constant variable is not allowed since the const variable cannot be reassigned
console.log(nums);


// 7 (Bonus Challenge)
const a = 10;
{
    const a = 20;
    console.log(a); // 20 block scoped variable shadows the outer variable
}
console.log(a); // 10 