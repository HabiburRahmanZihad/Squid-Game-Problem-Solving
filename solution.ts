// 1. Reverse a String
function reverseString(s: string): string {
    let reversedText = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reversedText += s[i];
    }

    return reversedText;
}

console.log(reverseString("hello"));