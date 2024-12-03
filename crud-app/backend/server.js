const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const appConfig = require('./config/appConfig');

dotenv.config(); // Load environment variables

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
// (Define your routes here)

// Start server
app.listen(appConfig.port, () => {
  console.log(`Server running in ${appConfig.environment} mode on http://localhost:${appConfig.port}`);
});
