// Task 1: Create and Access Object Properties

// Create the book object
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genre: "Fiction"
};

// Accessing properties using dot notation
console.log(book.title);           // Output: The Great Gatsby
console.log(book.author);          // Output: F. Scott Fitzgerald

// Accessing properties using bracket notation
console.log(book['yearPublished']); // Output: 1925
console.log(book['genre']);         // Output: Fiction


// ----------------------------------------------------

// Task 2: Modify and Delete Object Properties

// Create the car object
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    color: "Red"
};

// Modify the color property
car.color = "Blue";

// Delete the year property
delete car.year;

// Print the modified object
console.log(car); 
// Output: { make: 'Toyota', model: 'Corolla', color: 'Blue' }


// -----------------------------------------------------------------

// Task 3: Nested Objects

// Create the student object
var student = {
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
        history: "A-"
    }
};

// Access city and state using dot notation
console.log(student.address.city);  // Output: New York
console.log(student.address.state); // Output: NY

// Access the grade for a specific course using bracket notation
console.log(student.courses['math']); // Output: A


// Task 4: Looping Through Object Properties

// Create the employee object
var employee = {
    name: "John Doe",
    position: "Software Developer",
    department: "IT",
    salary: 70000
};

// Use for...in loop to iterate through properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Output:
// name: John Doe
// position: Software Developer
// department: IT
// salary: 70000


// -----------------------------------------------------------------

// Task 5: Using Methods in Objects

// Create the calculator object
var calculator = {
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
console.log(calculator.add());      // Output: 15
console.log(calculator.subtract()); // Output: 5
console.log(calculator.multiply()); // Output: 50
console.log(calculator.divide());   // Output: 2

// --------------------------------------------------

// Task 6: Nested Object Iteration

// Create the company object
var company = {
    name: "Tech Solutions",
    location: "San Francisco",
    employees: {
        Alice: "Manager",
        Bob: "Developer",
        Charlie: "Designer"
    }
};

// Iterate through the company object
for (let key in company) {
    console.log(`${key}: ${company[key]}`);
    
    // Check if the property is 'employees', use nested loop
    if (key === 'employees') {
        for (let employee in company.employees) {
            console.log(`${employee}: ${company.employees[employee]}`);
        }
    }
}

// Output:
// name: Tech Solutions
// location: San Francisco
// employees: [object Object]
// Alice: Manager
// Bob: Developer
// Charlie: Designer

// ----------------------------------------------------------

// Task 7: Calculate Average Age

// Create the people object
var people = {
    Alice: 25,
    Bob: 30,
    Charlie: 35,
    Diana: 40
};

var totalAge = 0;
var count = 0;

// Use for...in loop to iterate through the people object
for (var person in people) {
    totalAge += people[person];
    count++;
}

// Calculate and print the average age
var averageAge = totalAge / count;
console.log(`Average Age: ${averageAge}`); // Output: Average Age: 32.5
