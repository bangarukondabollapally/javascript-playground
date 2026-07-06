// ------------------ Arithmetic Operators ------------------

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ------------------ Comparison Operators ------------------

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// ------------------ Logical Operators ------------------

console.log(a && b); // 3 (returns the last truthy value)
console.log(a || b); // 10 (returns the first truthy value)
console.log(!a);     // false

// ------------------ Assignment Operators ------------------

// Each assignment updates the value of 'a'
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);

// ------------------ Unary Operators ------------------

console.log(a++); // returns current value, then increments
console.log(a--); // returns current value, then decrements
console.log(++a); // increments first, then returns
console.log(--a); // decrements first, then returns

// ------------------ Ternary Operator ------------------

let c = a > b ? "a is greater" : "b is greater";
console.log(c);

// ------------------ typeof ------------------

console.log(typeof a);

// ------------------ instanceof ------------------

let arr = [];
console.log(typeof arr);
console.log(arr instanceof Array);




// ------------------ Challenge 1 - String Conversion ------------------

console.log("10" + 1); // 101 (string concatination)
console.log("10" - 1); // 9 (string converted to number)
console.log(true + false); // 1 (true -> 1, false -> 0)
console.log(!!"Sheryians"); // true (string to boolean)



// ------------------ Challenge 2 - String to Number Conversion ------------------

let str = "42";
console.log(str); // "42" (string)
console.log(+str); // 42 (number)
console.log(typeof +str); // number



// ------------------ Challenge 3 - Ternary Operator ------------------

let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); // Minor



// ------------------ Challenge 4 - Calculator with Ternary ------------------

function calc(a, b, operator) {
    return operator === '+' ? a + b :
           operator === '-' ? a - b :
           operator === '*' ? a * b :
           operator === '/' ? a / b :
           "Invalid operator";
}

console.log(calc(5, 2, '*')); // 10



// ------------------ Challenge 5 - Grading System ------------------

let marks = 82;

let grade = marks >= 85 ? "Excellent" :
            marks >= 70 ? "Good" :
            marks >= 50 ? "Average" :
            "Fail";

console.log(grade); // Good