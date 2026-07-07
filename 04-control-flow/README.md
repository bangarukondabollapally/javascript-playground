# 04 - Control Flow

## Purpose

Control which block of code runs based on a condition.

## Concepts Covered

- `if` statements
- `else` statements
- `else if` statements
- `switch` statements

## Quick Reference

| Structure | Use when |
|-----------|----------|
| `if / else` | One condition, two outcomes |
| `if / else if / else` | Multiple ranges or conditions |
| `switch` | Comparing one value against many fixed cases |

## Rule of Thumb

- Order `if-else-if` conditions deliberately - put the more specific case first, or a general condition above it can swallow it (see Challenge 3).
- Reach for `switch` when checking one variable against many exact values; keep `if-else-if` for ranges and combined conditions.
- Never forget `break` in a `switch` case, or execution falls through to the next one.

## Common Errors

- Missing `break` in a `switch` - causes fall-through to the next case.
- A general condition placed before a more specific one in an `if-else-if` chain - the specific case never gets checked.
- Using `=` instead of `==`/`===` inside a condition (assignment, not comparison).

## Files

| File | Purpose |
|------|---------|
| control-flow.js | Solutions and experiments |
| challenges.md | Practice questions |
| index.html | Runs the JavaScript in the browser |

## Status

✅ Completed