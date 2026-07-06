# 02 - Data Types

## Concepts Covered

- Primitive Types
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - BigInt
  - Symbol

- Reference Types
  - Object
  - Array
  
- Primitive vs Reference Values
- `typeof`
- `NaN`
- Truthy vs Falsy
- Type Coercion
- Loose vs Strict Equality

## Quick Reference

| Type | `typeof` result |
|------|:---------------:|
| String | "string" |
| Number | "number" |
| Boolean | "boolean" |
| Undefined | "undefined" |
| Null | "object" (bug) |
| BigInt | "bigint" |
| Symbol | "symbol" |
| Object | "object" |
| Array | "object" |
| Function | "function" |

## Rule of Thumb

- Use `===` over `==` to avoid unexpected type coercion.
- Remember only `false`, `0`, `""`, `null`, `undefined`, and `NaN` are falsy — everything else is truthy.
- Primitives are copied by value; objects/arrays are copied by reference.

## Common Errors

- `typeof null` returns `"object"` — a long-standing JavaScript bug, not a mistake in your code.
- `NaN === NaN` is `false` — use `Number.isNaN()` to check for it.
- Mixing `BigInt` and `Number` directly in arithmetic throws a `TypeError`.

## Files

| File          | Purpose                            |
| ------------- | ---------------------------------- |
| datatype.js   | Solutions and experiments          |
| challenges.md | Practice questions                 |
| index.html    | Runs the JavaScript in the browser |

## Status

✅ Completed