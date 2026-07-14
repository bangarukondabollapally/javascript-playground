# 06 - Functions

## Purpose

Organize reusable logic into a single block that can be called with different inputs.

## Concepts Covered

* Function Declarations
* Function Expressions
* Arrow Functions
* Parameters vs Arguments
* Default Parameters
* Rest Parameters
* Return Values
* Hoisting (Declarations vs Expressions)
* Closures
* Higher-Order Functions (HOF)
* IIFE (Immediately Invoked Function Expression)

## Quick Reference

| Concept                     | Key Behavior                                       |
| --------------------------- | -------------------------------------------------- |
| Function Declaration        | Hoisted – can be called before its definition      |
| Function Expression         | Not hoisted – must be defined before it is called  |
| Arrow Function              | Does not have its own `this` or `arguments` object |
| Default Parameter           | Used when no argument (or `undefined`) is passed   |
| Rest Parameter              | Collects remaining arguments into an array         |
| Return Value                | Sends a value back to the caller                   |
| Closure                     | Remembers variables from its outer scope           |
| Higher-Order Function (HOF) | Accepts a function as an argument or returns one   |
| IIFE                        | Executes immediately and creates its own scope     |

## Rule of Thumb

* Use function declarations for reusable named functions.
* Use arrow functions for short, concise functions.
* Use default parameters to provide fallback values.
* Use rest parameters when accepting a variable number of arguments.
* Use closures when a function needs to remember values from its outer scope.

## Common Errors

* Calling a function expression before it is defined.
* Forgetting to return a value when one is expected.
* Confusing `return` with `console.log()`.
* Forgetting that closures retain access to their outer scope.

## Files

| File          | Purpose                            |
| ------------- | ---------------------------------- |
| functions.js  | Solutions and experiments          |
| challenges.md | Practice questions                 |
| index.html    | Runs the JavaScript in the browser |

## Status

✅ Completed
