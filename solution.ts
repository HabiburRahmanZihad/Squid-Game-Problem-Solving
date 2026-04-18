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