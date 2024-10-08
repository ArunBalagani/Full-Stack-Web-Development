// String Task

// let food = "Biryani";
// console.log(food);

// Number Task

// let myAge = 27;
// console.log(myAge);

// Boolean Task

// let isEnabled = false;
// console.log(isEnabled);

// Undefined Task

// let userName;
// console.log(userName);


// Null Task

// let carBrand = null;
// console.log(carBrand);


// console.log(1 + 1 - 1 * 1 % 1 / 1);
// 1 * 1 → 1
// 1 % 1 → 0 (because 1 divided by 1 leaves no remainder)
// 0 / 1 → 0
// Now we have: 1 + 1 - 0
// 1 + 1 → 2
// 2 - 0 → 2

// console.log(2 + 2 - 2 * 2 % 2 / 2);
// Steps:
// 1. 2 * 2 = 4
// 2. 4 % 2 = 0
// 3. 0 / 2 = 0
// 4. 2 + 2 - 0 = 4

// console.log(5 + 3 - 4 * 2 % 3 / 1);
// Steps:
// 1. 4 * 2 = 8
// 2. 8 % 3 = 2
// 3. 2 / 1 = 2
// 4. 5 + 3 - 2 = 6

// console.log(10 + 2 - 6 * 3 % 4 / 2);
// Steps:
// 1. 6 * 3 = 18
// 2. 18 % 4 = 2
// 3. 2 / 2 = 1
// 4. 10 + 2 - 1 = 11

// console.log(7 + 5 - 3 * 4 % 5 / 2);
// Steps:
// 1. 3 * 4 = 12
// 2. 12 % 5 = 2
// 3. 2 / 2 = 1
// 4. 7 + 5 - 1 = 11

// console.log(7 + 5 - 3 * 4 % 5 / 2);
// Same as before
// 1. 3 * 4 = 12
// 2. 12 % 5 = 2
// 3. 2 / 2 = 1
// 4. 7 + 5 - 1 = 11

// console.log("7" + 5 - 3 * 4 % 5 / 2);
// steps

// 1. 3 * 4 = 12;
// 12 % 5 = 2;
// 2 / 2 = 1;
// "7" + 5 = 75;
// 75 - 1 = 74;

// console.log(true + 5 - 3 * 4 % false / 2);
// Steps:
// 1. true is 1, false is 0
// 2. 1 + 5 = 6
// 3. 3 * 4 = 12
// 4. 12 % 0 (undefined behavior, but will result in NaN due to division by zero)
// Output: NaN


// let x;
// console.log(x + 5 - 3 * 4 % 5 / 2);
// Steps:
// 1. x is undefined
// 2. undefined + 5 => NaN
// 3. Anything with NaN results in NaN

// console.log(null + 5 - 3 * 4 % 5 / 2);
// Steps:
// 1. null is treated as 0
// 2. 0 + 5 = 5
// 3. 3 * 4 = 12
// 4. 12 % 5 = 2
// 5. 2 / 2 = 1
// 6. 5 - 1 = 4

// console.log(7.5 + 5.2 - 3.3 * 4.1 % 5.7 / 2.8);
// Steps:
// 1. 3.3 * 4.1 = 13.53
// 2. 13.53 % 5.7 = 2.13 (modulus of floats)
// 3. 2.13 / 2.8 ≈ 0.76
// 4. 7.5 + 5.2 ≈ 12.7
// 5. 12.7 - 0.76 ≈ 11.94

// console.log("1" + "1");

// Task 1: Check if a Number is Positive, Negative, or Zero

// function checkNumber(num){
// if(num > 0){
// console.log(`${num} is positive number. `)
// }else if (num < 0){
//     console.log(`${num} is a negative number.`)
// }else {
//     console.log(`${num} is zero.`)
// }
// }

// checkNumber(10);
// checkNumber(-5);
// checkNumber(0);

// Task 2: Determine Age Group

// function determineAgeGroup(age){
// if(age < 0){
//     console.log(`${age} Age cannot be negative. `);
// }else if (age <=10){
//     console.log(`${age} You are a child.`);
// }else if (age <= 20){
//     console.log(`${age} You are a teenager`);
// }else if (age <= 60){
//     console.log(`${age} You are an adult.`);
// }else {
//     console.log(`${age} You are a Senior.`);
// }
// }
// determineAgeGroup(10);
// determineAgeGroup(15);
// determineAgeGroup(30);
// determineAgeGroup(70);
// determineAgeGroup(-1);

// Task 3: Check if a Year is a Leap Year


// function isLeapYear(year){
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
// console.log(`${year} is a leap year.`)
// }else{
// console.log(`${year} is not a leap year.`)
// }
// }

// isLeapYear(2020);  // Output: 2020 is a leap year.
// isLeapYear(2021);  // Output: 2021 is not a leap year.
// isLeapYear(1900);  // Output: 1900 is not a leap year.
// isLeapYear(2000);  // Output: 2000 is a leap year.













