// Task 1: Simple Calculator using var
// var num1 = 10;
// var num2 = 5;
// var operator = "+"; // operators : "+" "-", "*", "/", or "%"

// switch (operator) {
//     case "+":
//         console.log(num1 + " + " + num2 + " = " + (num1 + num2));
//         break;
//     case "-":
//         console.log(num1 + " - " + num2 + " = " + (num1 - num2));
//         break;
//     case "*":
//         console.log(num1 + " * " + num2 + " = " + (num1 * num2));
//         break;
//     case "/":
//         console.log(num1 + " / " + num2 + " = " + (num1 / num2));
//         break;
//     case "%":
//         console.log(num1 + " % " + num2 + " = " + (num1 % num2));
//         break;
//     default:
//         console.log("Invalid operator");
// }

// --------------------------------------------------------------

// Task 2: Print the First 10 Multiples of 5 using var

// for (var i = 1; i <= 10; i++) {
//     console.log("5 * " + i + " = " + (5 * i));
// }

// ----------------------------------------------------------------

// Task 3: Calculate Factorial of a Number using var
// var number = 5; // You can change this to any number
// var factorial = 1;

// for (var i = 1; i <= number; i++) {
//     factorial *= i;
// }

// console.log("Factorial of " + number + " is " + factorial);

// -------------------------------------------------------------

// Task 4: FizzBuzz using var
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
