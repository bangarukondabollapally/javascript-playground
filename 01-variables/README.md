# 01 - Variables

## Purpose

Store values such as numbers, strings, booleans, objects, and arrays.

## Concepts Covered

- `var`
- `let`
- `const`
- Hoisting
- Temporal Dead Zone (TDZ)
- Block Scope
- `typeof`

## Quick Reference

| Keyword | Scope | Redeclare | Reassign |
|---------|-------|:---------:|:--------:|
| `var` | Function | ✅ | ✅ |
| `let` | Block | ❌ | ✅ |
| `const` | Block | ❌ | ❌ |

## Rule of Thumb

- Use `const` by default.
- Use `let` when the value changes.
- Avoid `var` in modern JavaScript.

## Common Errors

- `ReferenceError` → accessing a `let`/`const` variable before it's declared (TDZ)
- `SyntaxError` → redeclaring a `let`/`const` variable
- `TypeError` → reassigning a `const` variable

## Files

| File | Purpose |
|------|---------|
| variables.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status

✅ Completed