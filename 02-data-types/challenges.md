# Data Types - Practice Challenges

## Challenge 1 - `typeof`

Predict the output.

```js
console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123n);
```

---

## Challenge 2 - Type Coercion

Predict the output.

```js
console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);
console.log(undefined + 1);
```

Explain why each output is different.

---

## Challenge 3 - Truthy and Falsy

Which of the following values are **truthy** and which are **falsy**?

```js
false
0
""
null
undefined
NaN
"0"
"false"
[]
{}
```

---

## Challenge 4 - Primitive vs Reference Values

Predict the output.

```js
let a = 10;
let b = a;

a++;

console.log(a);
console.log(b);

let arr1 = [1, 2];
let arr2 = arr1;

arr1.push(3);

console.log(arr1);
console.log(arr2);
```

Explain why the outputs are different.

---

## Challenge 5 - Loose vs Strict Equality

Predict the output.

```js
console.log(5 == "5");
console.log(5 === "5");

console.log(null == undefined);
console.log(null === undefined);
```

Explain the difference.

---

## Bonus Challenge - NaN

Predict the output.

```js
console.log(typeof NaN);
console.log("hello" - 1);
console.log(0 / 0);
```

Why is `NaN` considered a number?