// config/connection.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection URI
    const uri = 'mongodb://localhost:27017/googlebooks';
    

    // Connect to MongoDB
    await mongoose.connect(uri, options);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = mongoose.connection;
