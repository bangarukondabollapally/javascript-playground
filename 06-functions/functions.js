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



// ------------------ Challenge 1 - BMI Calculator ------------------

let bmi = (w,h)=>{ //? w = weight, h = height
    return w/(h*h);
}
console.log(bmi(65,1.65).toFixed(3));


// ------------------ Challenge 2 - greet function with default parameter ------------------

function greetHello(name="User"){
    console.log(`Hello ${name}`);
}
greetHello(); //? Hello User
greetHello("Harsh"); //? Hello Harsh


// ------------------ Challenge 3 - Sum all numbers passed to a function using the rest parameter ------------------

function sumRest(...nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}
console.log(sumRest(10,20,30,40,50));


// ------------------ Challenge 4 - Create a closure-based counter function ------------------

function Counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let closureCounter = Counter();
closureCounter(); //? 1
closureCounter(); //? 2


// ------------------ Challenge 5 - Write a function that returns another function ------------------

function outerFunc(a){
    return function innerFunc(b){
        return a*b;
    }
}

let multiplyFunc = outerFunc(5);
console.log(multiplyFunc(10)); //? 50


// ------------------ Challenge 6 - Use a function to log all even numbers in an array ------------------

function logEven(...nums){
    for(let i=1;i<nums.length;i++){
        if(i%2===0){
            console.log(`${i} is even`);
        }
    }
}

logEven(1,2,3,4,5,6,7,8,9,10);


// ------------------ Challenge 7 - Create a pure function that adds tax to a price ------------------

function addTax(price){
    return price+(price*0.18); // 18% tax assuming
}

console.log(addTax(100)); //118
console.log(addTax(200)); //236


// ------------------ Challenge 8 ------------------

// greet(); //! ReferenceError since the function expression greet is not hoisted

const greet = function () {
  console.log("Hi");
};

//? Function expression are not hoisted but function declaration does it so it doesn't throw an error



// ------------------ Challenge 9 - Use an IIFE to show a welcome message ------------------
(function(){
    console.log("Hello from IIFE");
})();


// ------------------ Challenge 10 - Discount calculator with HOF ------------------

function discountCalc(price, discount){
    console.log(discount(price));
}

let discount = function(price){
    return price - (price * 0.18);
}

discountCalc(100,discount);


// ------------------ Challenge 11 - Make a toUpperCase transformer using a HOF ------------------

function upperCase(text, upper){
    console.log(upper(text));
}

upperCase("transformer",(text)=>text.toUpperCase());