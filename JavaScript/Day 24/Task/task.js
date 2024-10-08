//Arrow function

// Convert Traditional Functions to Arrow Functions
// Convert the following traditional functions into arrow functions.

function multiply(a, b) {
    return a * b;
}

function isEven(num) {
    return num % 2 === 0;
}

function sayHello() {
    return 'Hello, world!';
}

function add(x, y, z) {
    return x + y + z;
}


//Lexical Scope
// Multiple Nested Scopes
// Create a function with multiple nested functions, each accessing variables from their outer scopes.



// Closure
// Create a Counter

// Create a counter function using closures that can increment and decrement a private count variable.


// Convert multiply to an arrow function:

const multiply = (a, b) => a * b;


// Convert isEven to an arrow function:

const isEven = num => num % 2 === 0;

// Convert sayHello to an arrow function:

const sayHello = () => 'Hello, world!';


// Convert add to an arrow function:

const add = (x, y, z) => x + y + z;


// Lexical Scope: Multiple Nested Scopes

function outerFunction() {
    const outerVar = 'I am outside!';
    
    function innerFunction() {
      const innerVar = 'I am inside!';
      
      function nestedFunction() {
        const nestedVar = 'I am deeply nested!';
        console.log(outerVar);   // Access outerVar from outerFunction
        console.log(innerVar);   // Access innerVar from innerFunction
        console.log(nestedVar);  // Access nestedVar from nestedFunction
      }
      
      nestedFunction();
    }
    
    innerFunction();
  }
  
  outerFunction();

  
//   Closure: Create a Counter

function createCounter() {
    let count = 0;  // Private variable
    
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  console.log(counter.getCount());  // Output: 1 (current count)

  