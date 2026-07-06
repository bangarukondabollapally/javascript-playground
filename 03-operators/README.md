# 03 - Operators

## Concepts Covered

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators
- Unary Operators
- Ternary Operator
- `instanceof`

## Quick Reference

| Operator | Type | Example |
|----------|------|---------|
| `+ - * / %` | Arithmetic | `a % b` |
| `== != > < >= <=` | Comparison | `a >= b` |
| `&& \|\| !` | Logical | `a && b` |
| `= += -= *= /=` | Assignment | `a += b` |
| `++ --` | Unary | `a++` |
| `? :` | Ternary | `a > b ? x : y` |
| `instanceof` | Type check | `arr instanceof Array` |

## Rule of Thumb

- Use ternary for simple, single-condition branching — not for complex logic.
- Chained ternaries are fine for a handful of ranges; beyond that, conditionals (next chapter) are clearer.
- `==` coerces types before comparing; prefer `===` for predictable results.

## Common Errors

- Forgetting operator precedence — arithmetic runs before comparison, comparison before logical.
- Confusing `a++` (returns then increments) with `++a` (increments then returns).
- Chaining too many ternaries makes code hard to read — a sign it's time for `if/else`.

## Files

| File | Purpose |
|------|---------|
| operator.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status

✅ Completed