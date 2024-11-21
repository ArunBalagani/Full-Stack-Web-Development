// let http = require('http')
// console.log(http)

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code (OK)
  res.setHeader('Content-Type', 'text/plain'); // Content-Type header
  res.end('Hello, World!\n'); // Send the response and end it
});

// Start the server on port 3000
let PORT = 3000;
let HOSTNAME = 'localhost';
server.listen(3000, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT} `);
});
