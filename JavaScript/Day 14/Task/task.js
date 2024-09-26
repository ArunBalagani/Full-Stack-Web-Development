// ---------------------------------------------------------------
// Task 1 :
// Find Maximum Element 

// var numbers = [23, 45, 67, 12, 89, 34];
// var max = Math.max(...numbers);
// console.log("Maximum Element:", max);

// var max = Math.min(...numbers);
// console.log("Maximum Element:" , max);


// ---------------------------------------------------------

// Task 2: 
// Reverse Array

// var numbers = [1, 2, 3, 4, 5];
// var reversed = numbers.reverse();

// console.log("Reversed Array:", reversed);

// Task 3 : 
// Find Unique Elements
// Objective: Create a new array that contains only the unique elements from an existing array (remove duplicates).

// var numbers = [1, 2, 3, 1, 2, 4, 5, 4, 6];

// var uniqueNumbers = [...new Set(numbers)];

// console.log("Unique numbers:" + uniqueNumbers);

// ----------------------------------------------------------------

// Task 4 :
// Flatten a Multidimensional Array
// Objective: Flatten a multidimensional array into a single-dimensional array.

// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   var flattenedArray = matrix.flat();
//   console.log("Flattened Array:", flattenedArray);
  
//   console.log(matrix[0][0]);

// -----------------------------------------------------------------

// Task 5: 
// Find the Average of Array Elements
// numbers = [1, 2, 3, 4, 5];
// Write a program that takes an array of numbers and calculates the average of all elements in the array.

// var numbers = [1, 2, 3, 4, 5];

// var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// var average = sum / numbers.length;

// console.log("Average:", average);

// -----------------------------------------------------------------

// Task 6:
// Find All Pairs of Elements with a Given Sum
// Write a program that finds all pairs of elements in an array that add up to a specific target sum
// array = [1, 2, 3, 4, 5, 6, 7];

// out put:  Output: [[1, 7], [2, 6], [3, 5]];

// var array = [1, 2, 3, 4, 5, 6, 7];
// var targetSum = 8;
// var pairs = [];

// for (var i = 0; i < array.length; i++) {
//   for (var j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === targetSum) {
//       pairs.push([array[i], array[j]]);
//     }
//   }
// }

// console.log("Pairs with Sum:", pairs);
