// Task 1: Function to Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


// Task 2: Function to Calculate Factorial

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5));  // Output: 120
console.log(factorial(7));  // Output: 5040


// Task 3: Function to Generate Fibonacci Sequence

function fibonacci(n) {
    var fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);
}


console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Task 4: Function to Perform Multiple String Operations

function stringOperations(str) {
    return {
        length: str.length,
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase()
    };
}

// Example usage:
console.log(stringOperations("hello"));
// Output: { length: 5, uppercase: "HELLO", lowercase: "hello" }

console.log(stringOperations("JavaScript"));
// Output: { length: 10, uppercase: "JAVASCRIPT", lowercase: "javascript" }


// Task 5: Function to Count Vowels in a String

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("JavaScript")); // Output: 3

// Task 6: Function to Flatten a Nested Array

function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

// Example usage:
console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])); // Output: [1, 2, 3, 4, 5, 6, 7]
