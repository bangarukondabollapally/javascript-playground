# 06 - Functions

## Purpose

Wrap reusable logic into a single block that can be called with different inputs.

## Concepts Covered
- Hoisting: Declarations vs Expressions
- Function Declarations
- Function Expressions
- Arrow Functions
- Parameters vs Arguments
- Default Parameters
- Rest Parameters
- Return Values
- Closures
- Higher-Order Functions (HOF)
- IIFE (Immediately Invoked Function Expression)


## Quick Reference

| Concept | Key Behavior |
|---------|--------------| 
| Function Declaration | Hoisted - can be called before it's defined |
| Function Expression | Not hoisted - must be defined before it's called |
| Arrow Function | No own `this`, no `arguments` object |
| Rest Parameter | Collects extra arguments into an array |
| Default Parameter | Used when no argument (or `undefined`) is passed |
| Closure | Inner function remembers its outer scope even after the outer function has finished |
| HOF | Takes a function as an argument, or returns one |
| IIFE | Runs immediately, creates a private scope |

## Rule of Thumb

- Use `const` + arrow functions for short, throwaway logic; use declarations for named, reusable functions.
- Reach for a closure when you need a function to "remember" a value across calls (e.g. a counter).
- A pure function should always return the same output for the same input, with no side effects.
- Don't rely on hoisting for function expressions - only declarations are safe to call before their definition.

## Common Errors

- Calling a function expression before it's defined - throws `ReferenceError`/`TypeError`, unlike a declaration.
- Forgetting a closure keeps its outer variables alive - can cause unexpected shared state across calls.
- Mixing up `return` and `console.log` - `return` sends a value back to the caller, `console.log` just prints it.

## Files

| File | Purpose |
|------|---------|
| functions.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status

✅ Completed