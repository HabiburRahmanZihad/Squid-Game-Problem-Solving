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