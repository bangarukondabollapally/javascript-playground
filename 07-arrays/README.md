# 07 - Arrays

## Purpose

Store, organize, and manipulate multiple values in a single variable.

## Concepts Covered

* Creating, accessing, and modifying arrays
* Modifier methods: `push`, `pop`, `shift`, `unshift`, `splice`, `reverse`, `sort`
* Extractor methods: `slice`
* Iteration methods: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`
* Array Destructuring
* Spread Operator

## Quick Reference

| Method                               | Changes Original? | Returns                               |
| ------------------------------------ | :---------------: | ------------------------------------- |
| `push` / `pop` / `shift` / `unshift` |         ✅         | New length / Removed element          |
| `splice`                             |         ✅         | Removed elements                      |
| `reverse` / `sort`                   |         ✅         | The modified array                    |
| `slice`                              |         ❌         | New array                             |
| `forEach`                            |         ❌         | `undefined`                           |
| `map`                                |         ❌         | New array (same length)               |
| `filter`                             |         ❌         | New array (matching elements)         |
| `reduce`                             |         ❌         | Single accumulated value              |
| `find`                               |         ❌         | First matching element or `undefined` |
| `some` / `every`                     |         ❌         | Boolean                               |

## Rule of Thumb

* `splice()` modifies the original array, while `slice()` returns a new one.
* `map()` should return a value for every element. If you only want matching elements, use `filter()`.
* Always provide a compare function when sorting numbers using `sort()`.
* Use the spread operator (`[...arr]`) to create a new array. Assigning one array to another copies only the reference.

## Common Errors

* Using `sort()` without a compare function for numbers.
* Expecting `forEach()` to return a new array.
* Confusing `splice()` with `slice()`.

## Files

| File          | Purpose                            |
| ------------- | ---------------------------------- |
| arrays.js     | Solutions and experiments          |
| challenges.md | Practice questions                 |
| index.html    | Runs the JavaScript in the browser |

## Status

✅ Completed
