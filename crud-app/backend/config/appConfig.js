// config/appConfig.js
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const appConfig = {
  port: process.env.PORT || 5000,  // Default to 5000 if not set
  mongoURI: process.env.MONGO_URI,  // Database URI
  secretKey: process.env.SECRET_KEY, // Used for JWT or encryption
  environment: process.env.NODE_ENV || 'development', // Application environment
};

module.exports = appConfig;
