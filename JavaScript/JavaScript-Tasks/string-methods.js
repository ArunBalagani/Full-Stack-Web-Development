let greeting = '  Hello, JavaScript World!  ';

// Using various string methods
console.log(greeting.trim());                    // Removes spaces: 'Hello, JavaScript World!'
console.log(greeting.toUpperCase());             // Converts to uppercase: '  HELLO, JAVASCRIPT WORLD!  '
console.log(greeting.slice(2, 7));               // Extracts substring: 'Hello'
console.log(greeting.includes('JavaScript'));    // Checks if includes 'JavaScript': true
console.log(greeting.replace('World', 'Everyone')); // Replace 'World' with 'Everyone': '  Hello, JavaScript Everyone!  '
console.log(greeting.split(' '));                // Split by space: [ '', '', 'Hello,', 'JavaScript', 'World!', '', '' ]
