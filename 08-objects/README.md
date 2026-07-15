# 08 - Objects

## Purpose

Store structured data as key-value pairs — model real-world records like a user, product, or form.

## Concepts Covered

- Creating objects, dot vs bracket notation
- Nested objects and deep access
- Object Destructuring (including nested)
- `for...in` loop
- `Object.keys()`, `Object.values()`, `Object.entries()`
- Spread syntax and `Object.assign()` (shallow copy)
- Deep clone via `JSON.parse(JSON.stringify())`
- Optional Chaining (`?.`)
- Computed Properties

## Quick Reference

| Task | Syntax |
|------|--------|
| Fixed key access | `obj.key` |
| Dynamic/multi-word key access | `obj["key name"]` |
| Loop keys + values | `for (let key in obj)` |
| Get keys only | `Object.keys(obj)` |
| Get values only | `Object.values(obj)` |
| Get key-value pairs | `Object.entries(obj)` |
| Shallow copy | `{...obj}` or `Object.assign({}, obj)` |
| Deep copy (plain data only) | `JSON.parse(JSON.stringify(obj))` |
| Safe nested access | `obj?.a?.b` |
| Dynamic key on creation | `{ [variable]: value }` |

## Rule of Thumb

- Use dot notation for fixed, known key names; use bracket notation for dynamic keys or keys with spaces.
- Spread and `Object.assign()` only copy one level deep — nested objects are still shared by reference.
- `JSON.parse(JSON.stringify(obj))` gives a true deep copy, but only for plain data — it drops functions, `undefined`, and special types.
- Reach for optional chaining (`?.`) whenever a nested property might not exist, to avoid a `TypeError`.

## Common Errors

- Mistaking a shallow copy (`{...obj}`) for a deep copy — mutating a nested property affects both objects.
- `for...in` also picks up inherited properties, not just the object's own keys.
- Forgetting object keys are always strings internally, even if written as identifiers or numbers.

## Files

| File | Purpose |
|------|---------|
| objects.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status
✅ Completed