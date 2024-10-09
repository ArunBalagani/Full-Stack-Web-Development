// Task1: Calculate Total Cost of Available Products
// You have an array of product objects, where each product has a name, price, and a boolean indicating whether 
// it is available. Your goal is to calculate the total cost of all available products.

// const products = [
//     { name: 'Laptop', price: 1000, available: true },
//     { name: 'Phone', price: 500, available: false },
//     { name: 'Tablet', price: 750, available: true },
//     { name: 'Monitor', price: 300, available: true },
//     { name: 'Keyboard', price: 100, available: false }
// ];

// Steps to Solve:
// Filter: Select products that are available.
// Map: Extract the prices of the available products.
// Reduce: Calculate the total cost of the available products.

// -------------------------------------------------------------------------------


// task 2:
// Task: Analyze and Transform Student Data
// You have an array of student objects, where each student has a name, age, and an array of scores. Your goal is 
// to process this data to find out the average score of students who are older than 18 and have passed 
// all subjects (a passing score is 60 or above). You also need to format the result to show the average score 
// rounded to two decimal places.

// const students = [
//     { name: 'Alice', age: 19, scores: [85, 92, 78] },
//     { name: 'Bob', age: 17, scores: [55, 60, 65] },
//     { name: 'Charlie', age: 18, scores: [95, 88, 92] },
//     { name: 'David', age: 20, scores: [72, 85, 90] },
//     { name: 'Eve', age: 22, scores: [60, 65, 70] },
//     { name: 'Frank', age: 21, scores: [95, 100, 99] }
// ];

// Steps to Solve:
// Filter: Select students who are older than 18 and have passed all subjects.
// Map: Extract the average score for each selected student.
// Reduce: Calculate the overall average score of these students.
// Format: Round the final average score to two decimal places.


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Task 1: Calculate Total Cost of Available Products

const products = [
    { name: 'Laptop', price: 1000, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 750, available: true },
    { name: 'Monitor', price: 300, available: true },
    { name: 'Keyboard', price: 100, available: false }
];

// Step 1: Filter available products
const availableProducts = products.filter(product => product.available);

// Step 2: Map to extract prices of available products
const availablePrices = availableProducts.map(product => product.price);

// Step 3: Reduce to calculate the total cost of available products
const totalCost = availablePrices.reduce((acc, price) => acc + price, 0);

console.log(`Total cost of available products: $${totalCost}`);


// ----------------------------------------------------------------------------


// Task 2: Analyze and Transform Student Data


const students = [
    { name: 'Alice', age: 19, scores: [85, 92, 78] },
    { name: 'Bob', age: 17, scores: [55, 60, 65] },
    { name: 'Charlie', age: 18, scores: [95, 88, 92] },
    { name: 'David', age: 20, scores: [72, 85, 90] },
    { name: 'Eve', age: 22, scores: [60, 65, 70] },
    { name: 'Frank', age: 21, scores: [95, 100, 99] }
];

// Step 1: Filter students who are older than 18 and passed all subjects (scores >= 60)
const passingStudents = students.filter(student => 
    student.age > 18 && student.scores.every(score => score >= 60)
);

// Step 2: Map to calculate the average score for each selected student
const averageScores = passingStudents.map(student => {
    const totalScore = student.scores.reduce((acc, score) => acc + score, 0);
    return totalScore / student.scores.length;
});

// Step 3: Reduce to calculate the overall average score
const overallAverage = averageScores.reduce((acc, score) => acc + score, 0) / averageScores.length;

// Step 4: Format the overall average to two decimal places
const roundedAverage = overallAverage.toFixed(2);

console.log(`Overall average score of students older than 18 who passed all subjects: ${roundedAverage}`);


