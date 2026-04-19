// 1. Reverse a String
function reverseString(s: string): string {
    let reversedText = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reversedText += s[i];
    }

    return reversedText;
}

// console.log(reverseString("hello"));


// 2. FizzBuzz
function fizzBuzz(n: number): string[] {

    const result: string[] = [];

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }

        else if (i % 3 === 0) {
            result.push("Fizz");
        }

        else if (i % 5 === 0) {
            result.push("Buzz");
        }

        else {
            result.push(String(i));
        }
    }

    return result;
}


// console.log(fizzBuzz(15));


// 4. Check for Palindrome
function isPalindrome(s: string): boolean {

    const text = s.toLowerCase();

    const reversed = text.split("").reverse().join("");

    return text === reversed;
}

// console.log(isPalindrome("habib"));



// 5. Sum of Array Elements
function sumArray(numbers: number[]): number {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

// console.log(sumArray([]));



// 6. Count Vowels
function countVowels(s: string): number {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
    }

    return count;
}

// console.log(countVowels("hello"));


// 7. Factorial
function factorial(n: number): number {
    if (n === 0) return 1;

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// console.log(factorial(5));



// 8. Even Numbers Only
function filterEvens(numbers: number[]): number[] {

    const evenNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
}

// console.log(filterEvens([1, 2, 3, 4, 5, 6]));


// 9. Fibonacci Sequence
function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];

    if (n === 1) return [0];

    for (let i = 2; i < n; i++) {
        const next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }

    return sequence;
}

// console.log(fibonacci(10));



// 12. Check Prime Number
function isPrime(n: number): boolean {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


// console.log(isPrime(22));