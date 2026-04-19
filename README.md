# Squid Game Problem Solving Assessment

A TypeScript solution set for the **Programming Hero Level 2 Squid Game** coding assessment — featuring classic algorithmic problems solved with clean, typed implementations.

---

## Problems Solved

| # | Function | Description |
|---|----------|-------------|
| 1 | `reverseString(s)` | Reverses a given string |
| 2 | `fizzBuzz(n)` | Classic FizzBuzz up to n |
| 4 | `isPalindrome(s)` | Checks if a string reads the same forwards and backwards |
| 5 | `sumArray(numbers)` | Returns the sum of all elements in a number array |
| 6 | `countVowels(s)` | Counts vowels (a, e, i, o, u) in a string |
| 7 | `factorial(n)` | Computes the factorial of a non-negative integer |
| 8 | `filterEvens(numbers)` | Filters and returns only even numbers from an array |
| 9 | `fibonacci(n)` | Generates a Fibonacci sequence of length n |
| 12 | `isPrime(n)` | Checks whether a number is prime |
| 15 | `countOccurrences(s, c)` | Counts how many times a character appears in a string |

---

## Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [TypeScript](https://www.typescriptlang.org/) installed globally

```bash
npm install -g typescript
```

### Run the Solution

**Compile TypeScript:**

```bash
tsc solution.ts
```

**Run the compiled output:**

```bash
node solution.js
```

**Or run directly with ts-node:**

```bash
npx ts-node solution.ts
```

---

## Function Reference

### `reverseString(s: string): string`
Reverses a string character by character using a manual loop.

```ts
reverseString("hello") // → "olleh"
```

---

### `fizzBuzz(n: number): string[]`
Returns an array from 1 to n, replacing multiples of 3 with `"Fizz"`, multiples of 5 with `"Buzz"`, and multiples of both with `"FizzBuzz"`.

```ts
fizzBuzz(15) // → ["1", "2", "Fizz", "4", "Buzz", ..., "FizzBuzz"]
```

---

### `isPalindrome(s: string): boolean`
Case-insensitive palindrome check.

```ts
isPalindrome("racecar") // → true
isPalindrome("hello")   // → false
```

---

### `sumArray(numbers: number[]): number`
Iterates over a number array and returns the total sum.

```ts
sumArray([1, 2, 3, 4, 5]) // → 15
sumArray([])               // → 0
```

---

### `countVowels(s: string): number`
Counts both uppercase and lowercase vowels in the input string.

```ts
countVowels("hello") // → 2
countVowels("AeIoU") // → 5
```

---

### `factorial(n: number): number`
Computes n! iteratively. Returns 1 for n = 0.

```ts
factorial(5) // → 120
factorial(0) // → 1
```

---

### `filterEvens(numbers: number[]): number[]`
Returns a new array containing only the even numbers.

```ts
filterEvens([1, 2, 3, 4, 5, 6]) // → [2, 4, 6]
```

---

### `fibonacci(n: number): number[]`
Generates the first n numbers of the Fibonacci sequence.

```ts
fibonacci(7) // → [0, 1, 1, 2, 3, 5, 8]
```

---

### `isPrime(n: number): boolean`
Uses trial division up to √n for an efficient primality check.

```ts
isPrime(7)  // → true
isPrime(22) // → false
```

---

### `countOccurrences(s: string, c: string): number`
Counts exact character matches (case-sensitive).

```ts
countOccurrences("hello world", "l") // → 3
```

---

## Project Structure

```
Squid Game Problem Solving/
├── solution.ts   # All TypeScript solutions
├── solution.js   # Compiled output (git-ignored)
└── README.md
```

---

## Author

**Habibur Rahman Zihad**
Programming Hero — Level 2 | Squid Game Assessment
