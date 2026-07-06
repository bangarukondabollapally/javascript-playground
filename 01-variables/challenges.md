# Variables - Practice Challenges

## Challenge 1 - Variable Declaration

Declare:

* Your name using `const`
* Your city using `const`
* Your age using `let`

Print all three values.

---

## Challenge 2 - Reassignment

Declare a variable using `let`.

Change its value and print it before and after the change.

---

## Challenge 3 - Redeclaration with `let`

Try this code and observe the result.

```js
let x = 5;
let x = 10;
```

**Questions**

* What error do you get?
* Why does it happen?

---

## Challenge 4 - Hoisting with `var`

Predict the output before running.

```js
console.log(count);

var count = 42;
```

**Question**

* Why is this the output?

---

## Challenge 5 - Temporal Dead Zone (TDZ)

Predict what happens before running.

```js
console.log(age);

let age = 20;
```

**Questions**

* What error do you get?
* Why does it happen?

---

## Challenge 6 - `const`

Declare a variable using `const`.

Now try to assign a new value to it.

```js
const pi = 3.14;

pi = 22 / 7;
```

**Questions**

* What error do you get?
* Why does it happen?

---

## Bonus Challenge - Block Scope

Predict the output before running.

```js
const a = 10;

{
    const a = 20;
    console.log(a);
}

console.log(a);
```

Explain why both outputs are different.