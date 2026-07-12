// ------------------ Function Declarations ------------------

function greetUser() {
    console.log("Welcome!");
}
greetUser();

//? Hoisted — can be called before its definition
sayHi();
function sayHi() {
    console.log("Hi");
}



// ------------------ Function Expressions ------------------

let greetExpr = function () {
    console.log("Hello from an expression");
};
greetExpr();

//! Not hoisted — calling before this line would throw an error
// greetEarly(); // ReferenceError
let greetEarly = function () {
    console.log("This only works after definition");
};



// ------------------ Arrow Functions ------------------

let greetArrow = () => {
    console.log("Hello from an arrow function");
};
greetArrow();



// ------------------ Parameters vs Arguments ------------------

//? parameters: name, age (placeholders inside the function)
function introduce(name, age) {
    console.log(name + " is " + age + " years old");
}
introduce("Harsh", 26); //? "Harsh" and 26 are the arguments



// ------------------ Default Parameters ------------------

function add(v1 = 0, v2 = 1) {
    console.log(v1 + v2);
}
add(10, 5); //? 15
add(10);    //? 11 (v2 falls back to default)



// ------------------ Rest Parameters ------------------

function sumAll(...nums) {
    console.log(nums); //? collected into an array
}
sumAll(10, 20, 30, 40, 50);



// ------------------ Return Values (Early Return) ------------------

function marks(val) {
    if (val < 25) return "Fail";
    if (val < 50) return "Pass";
    if (val < 75) return "Good";
    return "Excellent";
}
console.log(marks(21)); //? Fail



// ------------------ First Class Functions ------------------

//? Functions can be stored in variables just like any other value
function firstClass() {
    console.log("Inside First Class Function");
}
let call = firstClass;
call();



// ------------------ Higher-Order Functions (HOF) ------------------

//? A function that takes another function as an argument
function processMessage(msg, fn) {
    console.log(fn(msg));
}
processMessage("hello", (msg) => msg.toUpperCase());

//? A function that returns another function
function createMultiplier(x) {
    return function (y) {
        return x * y;
    };
}
let double = createMultiplier(2);
console.log(double(5)); //? 10



// ------------------ Pure vs Impure Functions ------------------

//? Pure -> doesn't change values outside its own scope
//? Impure -> can change values outside its own scope
let value = 10;

function pure() {
    console.log("Inside pure function", value);
}
pure();
pure();

function impure() {
    value++;
    console.log("Inside impure function", value);
}
impure(); //? 11
impure(); //? 12



// ------------------ Closures ------------------

function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count); //? This inner function + its outer variables together form a closure
    };
}

let counter = outer();
counter(); //? 1
counter(); //? 2
//? counter "remembers" count even after outer() has finished running



// ------------------ Lexical Scoping ------------------

function abcd() {
    console.log(11);
    function defg() {
        console.log(12);
        function ghij() {
            console.log(13);
        }
        ghij();
    }
    defg();
}

abcd();
//? Each inner function has access to variables from its enclosing (outer) scopes



// ------------------ IIFE (Immediately Invoked Function Expression) ------------------

(function () {
    console.log("Runs immediately, private scope");
})();
