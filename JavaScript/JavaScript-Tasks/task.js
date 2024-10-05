// 1. String Task
let favoriteFood = "Pizza"; // Assign your favorite food here
console.log(favoriteFood); // Log the string to the console

// 2. Number Task
let myAge = 25; // Assign your age here
console.log(myAge); // Log the number to the console

// 3. Boolean Task
let isStudent = true; // Assign true or false based on your student status
console.log(isStudent); // Log the boolean value to the console

// 4. Undefined Task
let myPet; // Declare variable without assigning a value
console.log(myPet); // Log the variable to see 'undefined'

// 5. Null Task
let carBrand = null; // Assign null value to represent no car ownership
console.log(carBrand); // Log the variable to the console


// ---------------------------------------------------------------------

Console Log Outputs Explained
console.log("1" + "4" + "1")
Output: "141"
Explanation: Concatenates the strings "1", "4", and "1".

console.log("A" - "B")
Output: NaN
Explanation: Subtraction is not defined for non-numeric strings, resulting in NaN (Not a Number).

console.log("A" - "B" + "1")
Output: "NaN1"
Explanation: The result of "A" - "B" is NaN, which is then concatenated with "1".

console.log("A" - "B" + 1)
Output: NaN
Explanation: The result of "A" - "B" is NaN, and adding 1 to NaN still results in NaN.

console.log("1" - "1")
Output: 0
Explanation: Subtracting numeric strings is converted to numbers, resulting in 0.

console.log(+"1" + "1" + "1")
Output: "111"
Explanation: The unary + converts "1" to 1, then concatenates it with "1" and "1" as strings.

console.log(1 + + "1" + "1")
Output: "111"
Explanation: + "1" converts the string to 1, then 1 + 1 results in 2, followed by concatenating with "1" to give "21". (This should be corrected to console.log(1 + 1 + "1"), which results in "21".)

console.log(1 - "1" + "1")
Output: "01"
Explanation: 1 - "1" results in 0, which is then concatenated with "1" to produce "01".

console.log(+ "")
Output: 0
Explanation: The unary + converts an empty string to 0.


// --------------------------------------------------------------------------

// Task 1: Check if a Number is Positive, Negative, or Zero


function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Example usage
checkNumber(10);  // Output: 10 is a positive number.
checkNumber(-5);  // Output: -5 is a negative number.
checkNumber(0);   // Output: 0 is zero.


// --------------------------------------------------------------------------

// Task 2: Determine Age Group

function determineAgeGroup(age) {
    if (age < 0) {
        console.log("Age cannot be negative.");
    } else if (age <= 12) {
        console.log("You are a child.");
    } else if (age <= 19) {
        console.log("You are a teenager.");
    } else if (age <= 64) {
        console.log("You are an adult.");
    } else {
        console.log("You are a senior.");
    }
}

// Example usage
determineAgeGroup(10);   // Output: You are a child.
determineAgeGroup(15);   // Output: You are a teenager.
determineAgeGroup(30);   // Output: You are an adult.
determineAgeGroup(70);   // Output: You are a senior.


// -------------------------------------------------------------------------

// Task 3: Check if a Year is a Leap Year

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage
isLeapYear(2020);  // Output: 2020 is a leap year.
isLeapYear(2021);  // Output: 2021 is not a leap year.
isLeapYear(1900);  // Output: 1900 is not a leap year.
isLeapYear(2000);  // Output: 2000 is a leap year.


// ---------------------------------------------------------------------------

// Task 4: Check if a Character is a Vowel or Consonant

function checkVowelOrConsonant(char) {
    // Ensure the input is a single character
    if (char.length !== 1) {
        console.log("Please enter a single character.");
        return;
    }

    // Check if the character is a letter
    const lowerChar = char.toLowerCase();
    if (/[a-z]/.test(lowerChar)) {
        if ("aeiou".includes(lowerChar)) {
            console.log(`${char} is a vowel.`);
        } else {
            console.log(`${char} is a consonant.`);
        }
    } else {
        console.log("Please enter a valid letter.");
    }
}

// Example usage
checkVowelOrConsonant('A');  // Output: A is a vowel.
checkVowelOrConsonant('b');  // Output: b is a consonant.
checkVowelOrConsonant('1');  // Output: Please enter a valid letter.
checkVowelOrConsonant('!');  // Output: Please enter a valid letter.



// --------------------------------------------------------------------

// Task 1: Simple Calculator

function simpleCalculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero is not allowed.";
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return "Error: Invalid operator.";
    }

    return `The result of ${num1} ${operator} ${num2} is: ${result}`;
}

// Example usage
console.log(simpleCalculator(10, 5, '+')); // Output: The result of 10 + 5 is: 15
console.log(simpleCalculator(10, 5, '-')); // Output: The result of 10 - 5 is: 5
console.log(simpleCalculator(10, 5, '*')); // Output: The result of 10 * 5 is: 50
console.log(simpleCalculator(10, 5, '/')); // Output: The result of 10 / 5 is: 2
console.log(simpleCalculator(10, 0, '/')); // Output: Error: Division by zero is not allowed.
console.log(simpleCalculator(10, 5, '%')); // Output: The result of 10 % 5 is: 0
console.log(simpleCalculator(10, 5, '^')); // Output: Error: Invalid operator.


// ------------------------------------------------------------------

// Task 2: Print the First 10 Multiples of 5

function printMultiplesOfFive() {
    for (let i = 1; i <= 10; i++) {
        console.log(i * 5); // Print the product of i and 5
    }
}

// Example usage
printMultiplesOfFive();
// Output:
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50


// ----------------------------------------------------------------------

// Task 3: Calculate Factorial of a Number

function calculateFactorial(num) {
    if (num < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }

    let factorial = 1; // Initialize factorial variable
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Multiply factorial by i
    }

    return `The factorial of ${num} is: ${factorial}`;
}

// Example usage
console.log(calculateFactorial(5)); // Output: The factorial of 5 is: 120
console.log(calculateFactorial(0)); // Output: The factorial of 0 is: 1
console.log(calculateFactorial(-3)); // Output: Error: Factorial is not defined for negative numbers.


// ----------------------------------------------------------------------

// Task 4: FizzBuzz

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Print FizzBuzz for multiples of both
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Print Fizz for multiples of 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Print Buzz for multiples of 5
        } else {
            console.log(i); // Print the number
        }
    }
}

// Example usage
fizzBuzz();
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...
// 98
// 99
// Fizz


// ------------------------------------------------------------------

// Task 1: Find Maximum Element

function findMaximum(numbers) {
    let maxElement = numbers[0]; // Assume the first element is the max
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxElement) {
            maxElement = numbers[i]; // Update max if current element is greater
        }
    }
    return maxElement;
}

// Example usage
const numbers1 = [23, 45, 67, 12, 89, 34];
console.log(findMaximum(numbers1)); // Output: 89


// --------------------------------------------------------------

// Task 2: Reverse Array

function reverseArray(numbers) {
    const reversed = []; // Create a new array to hold the reversed elements
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]); // Add elements in reverse order
    }
    return reversed;
}

// Example usage
const numbers2 = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers2)); // Output: [5, 4, 3, 2, 1]

// -----------------------------------------------------------------

// Task 3: Find Unique Elements

function findUniqueElements(numbers) {
    const uniqueElements = []; // Create a new array to hold unique elements
    const seen = new Set(); // Use a Set to track seen elements

    for (let number of numbers) {
        if (!seen.has(number)) {
            uniqueElements.push(number); // Add unique elements to the array
            seen.add(number); // Mark this number as seen
        }
    }
    return uniqueElements;
}

// Example usage
const numbers3 = [1, 2, 3, 1, 2, 4, 5, 4, 6];
console.log(findUniqueElements(numbers3)); // Output: [1, 2, 3, 4, 5, 6]


// ---------------------------------------------------------------

// Task 4: Flatten a Multidimensional Array

function flattenArray(matrix) {
    const flattened = []; // Create a new array to hold flattened elements
    for (let row of matrix) {
        for (let element of row) {
            flattened.push(element); // Add each element to the flattened array
        }
    }
    return flattened;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(flattenArray(matrix)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// --------------------------------------------------------------

// Task 5: Find the Average of Array Elements

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements
    return sum / numbers.length; // Return the average
}

// Example usage
const numbers5 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers5)); // Output: 3


// ------------------------------------------------------------------

// Task 6: Find All Pairs of Elements with a Given Sum

function findPairsWithSum(array, targetSum) {
    const pairs = []; // Create a new array to hold the pairs
    const seen = new Set(); // Use a Set to track seen elements

    for (let number of array) {
        const complement = targetSum - number; // Calculate the required complement
        if (seen.has(complement)) {
            pairs.push([complement, number]); // If complement is found, add the pair
        }
        seen.add(number); // Mark the current number as seen
    }
    return pairs;
}

// Example usage
const array6 = [1, 2, 3, 4, 5, 6, 7];
const targetSum = 8;
console.log(findPairsWithSum(array6, targetSum)); // Output: [[1, 7], [2, 6], [3, 5]]


// -----------------------------------------------------

// Task 1: Function to Reverse a String

function reverseString(str) {
    return str.split('').reverse().join(''); // Split string into an array, reverse it, then join back to a string
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("OpenAI")); // Output: "IAnepO"


// ----------------------------------------------------------

// Task 2: Function to Calculate Factorial

function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
    return n * factorial(n - 1); // Recursive case
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1


// ----------------------------------------------------------

// Task 3: Function to Generate Fibonacci Sequence

function fibonacci(n) {
    const fib = [0, 1]; // Initialize the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Generate the next Fibonacci number
    }
    return fib.slice(0, n); // Return the first n Fibonacci numbers
}

// Example usage
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// --------------------------------------------------

// Task 4: Function to Perform Multiple String Operations

function stringOperations(str) {
    return {
        length: str.length, // Get the length of the string
        uppercase: str.toUpperCase(), // Convert string to uppercase
        lowercase: str.toLowerCase() // Convert string to lowercase
    };
}

// Example usage
console.log(stringOperations("Hello World")); // Output: { length: 11, uppercase: 'HELLO WORLD', lowercase: 'hello world' }
console.log(stringOperations("JavaScript")); // Output: { length: 10, uppercase: 'JAVASCRIPT', lowercase: 'javascript' }


// ---------------------------------------------------------

// Task 5: Function to Count Vowels in a String

function countVowels(str) {
    const vowels = 'aeiouAEIOU'; // Define the vowels
    let count = 0; // Initialize count

    for (let char of str) {
        if (vowels.includes(char)) {
            count++; // Increment count if character is a vowel
        }
    }
    return count; // Return the total count of vowels
}

// Example usage
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("OpenAI")); // Output: 3


// ------------------------------------------------

// Task 6: Function to Flatten a Nested Array

function flattenArray(nestedArray) {
    return nestedArray.flat(); // Use the flat() method to flatten the nested array
}

// Example usage
console.log(flattenArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, [4, 5]]])); // Output: [1, 2, 3, 4, 5]


// --------------------------------------------------

// Task 1: Create and Access Object Properties

// Create an object representing a book
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction"
};

// Access and print each property using dot and bracket notation
console.log(book.title);         // Dot notation
console.log(book["author"]);     // Bracket notation
console.log(book.yearPublished);  // Dot notation
console.log(book["genre"]);       // Bracket notation


// ------------------------------------------------------------

// Task 2: Modify and Delete Object Properties

// Create an object representing a car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
};

// Change the color property
car.color = "Red";

// Delete the year property
delete car.year;

// Print the modified object
console.log(car); // Output: { make: 'Toyota', model: 'Camry', color: 'Red' }


// --------------------------------------------------------------


// Task 3: Nested Objects


// Create an object representing a student
const student = {
    name: "Alice",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    courses: {
        math: "A",
        science: "B",
        history: "A"
    }
};

// Access and print the student's city and state using dot notation
console.log(student.address.city); // Output: New York
console.log(student.address.state); // Output: NY

// Print the grade for a specific course using bracket notation
console.log(student.courses["science"]); // Output: B


// ---------------------------------------------

// Task 4: Looping Through Object Properties

// Create an object representing an employee
const employee = {
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    salary: 70000
};

// Use a for...in loop to iterate through the properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}


// -----------------------------------------------------------

// Task 5: Using Methods in Objects

// Create an object representing a calculator
const calculator = {
    num1: 10,
    num2: 5,
    add: function() {
        return this.num1 + this.num2;
    },
    subtract: function() {
        return this.num1 - this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    },
    divide: function() {
        return this.num1 / this.num2;
    }
};

// Call each method and print the result
console.log("Addition: " + calculator.add());        // Output: Addition: 15
console.log("Subtraction: " + calculator.subtract()); // Output: Subtraction: 5
console.log("Multiplication: " + calculator.multiply()); // Output: Multiplication: 50
console.log("Division: " + calculator.divide());      // Output: Division: 2


// -----------------------------------------------------------------

// Task 6: Nested Object Iteration

// Create an object representing a company
const company = {
    name: "Tech Solutions",
    location: "San Francisco",
    employees: {
        "Alice": "Developer",
        "Bob": "Designer",
        "Charlie": "Manager"
    }
};

// Use a for...in loop to iterate through the properties of the company object
for (let property in company) {
    console.log(`${property}: ${company[property]}`);
    
    // If the property is employees, iterate through the employee names and roles
    if (property === "employees") {
        for (let employee in company[property]) {
            console.log(`  ${employee}: ${company[property][employee]}`);
        }
    }
}


// -------------------------------------------------

// Task 7: Calculate Average Age

// Create an object representing people and their ages
const people = {
    "Alice": 25,
    "Bob": 30,
    "Charlie": 35,
    "David": 40
};

let totalAge = 0;
let count = 0;

// Use a for...in loop to iterate through the people object
for (let name in people) {
    totalAge += people[name]; // Add age to total
    count++; // Count the number of people
}

// Calculate the average age
const averageAge = totalAge / count;

// Print the average age
console.log("Average Age: " + averageAge); // Output: Average Age: 32.5


// --------------------------------------------------------

// Task 1: Using Spread Operator

function mergeArrays(...arrays) {
    // Use spread operator and Set to remove duplicates
    return [...new Set([].concat(...arrays))];
}

// Example usage
const result = mergeArrays([1, 2, 3], [2, 3, 4], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]


// ---------------------------------------------------------

// Task 2: Using Rest Operator

function calculateSum(...args) {
    return args.reduce((sum, item) => {
        // Check if the item is an array and sum its elements, otherwise add the number
        if (Array.isArray(item)) {
            return sum + item.reduce((acc, num) => acc + num, 0);
        }
        return sum + item;
    }, 0);
}

// Example usage
const total = calculateSum(1, 2, [3, 4], 5);
console.log(total); // Output: 15


// -------------------------------------------------------------

// Task 3: Array Destructuring

function swapFirstAndLast(arr) {
    // Destructure the first and last elements
    const [first, ...middle] = arr;
    const last = arr[arr.length - 1];
    
    // Return a new array with swapped first and last elements
    return [last, ...middle, first];
}

// Example usage
const swappedArray = swapFirstAndLast([1, 2, 3, 4, 5]);
console.log(swappedArray); // Output: [5, 2, 3, 4, 1]


// -------------------------------------------------------

// Task 4: Object Destructuring

function extractUserInfo(user) {
    const { name, age, email } = user;
    return { name, age, email };
}

// Example usage
const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: "123 Main St"
};

const userInfo = extractUserInfo(user);
console.log(userInfo); // Output: { name: 'John Doe', age: 30, email: 'john@example.com' }


// Task 5: Nested Destructuring

function extractCoordinates(point) {
    const { location: { latitude, longitude } } = point;
    return { latitude, longitude };
}

// Example usage
const point = {
    location: {
        latitude: 37.7749,
        longitude: -122.4194
    },
    name: "San Francisco"
};

const coordinates = extractCoordinates(point);
console.log(coordinates); // Output: { latitude: 37.7749, longitude: -122.4194 }


// -----------------------------------------------------------------

// Task 1: Vehicle and Car Constructor Functions

// Vehicle constructor function
function Vehicle() {
    this.start = function() {
        return "Vehicle started";
    };
}

// Car constructor function that inherits from Vehicle
function Car() {
    Vehicle.call(this); // Call the Vehicle constructor
}

// Inherit the prototype of Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add the drive method to Car
Car.prototype.drive = function() {
    return "Car is driving";
};

// Example usage
const myVehicle = new Vehicle();
console.log(myVehicle.start()); // Output: Vehicle started

const myCar = new Car();
console.log(myCar.start()); // Output: Vehicle started
console.log(myCar.drive()); // Output: Car is driving


// --------------------------------------------------------

// Task 2: Person Object and Student Creation

// Person object
const Person = {
    name: "",
    age: 0,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Create a new object student that inherits from Person
const student = Object.create(Person);

// Add properties to student
student.name = "Alice";
student.age = 20;

// Add a study method to student
student.study = function() {
    return `${this.name} is studying.`;
};

// Example usage
console.log(student.greet()); // Output: Hello, my name is Alice and I am 20 years old.
console.log(student.study()); // Output: Alice is studying.


// --------------------------------------------------

