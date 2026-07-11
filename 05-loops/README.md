# 05 - Loops

## Purpose

Repeat a block of code multiple times based on a condition.

## Concepts Covered

- `for` loop
- `while` loop
- `do-while` loop
- `break`
- `continue`

## Quick Reference

| Loop | Checks condition | Use when |
|------|-------------------|----------|
| `for` | before each run | you know the number of iterations |
| `while` | before each run | number of iterations is unknown upfront |
| `do-while` | after each run | body must run at least once |

## Rule of Thumb

- Use `for` when the number of iterations is known in advance.
- Use `while` when the loop depends on a condition that may change unpredictably.
- Use `do-while` only when the body must execute at least once, even if the condition is false.
- `break` exits the loop entirely; `continue` skips only the current iteration.

## Common Errors

- Infinite loops from forgetting to update the loop variable (e.g. missing `i++`).
- Off-by-one errors in loop conditions (`<` vs `<=`).
- Using `break` when `continue` was intended, or vice versa.

## Files

| File | Purpose |
|------|---------|
| loops.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status

✅ Completed