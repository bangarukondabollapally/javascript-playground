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
