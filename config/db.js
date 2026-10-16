
const mongoose = require("mongoose");

// Function to connect our Portfolio database
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string
    await mongoose.connect(process.env.MONGO_URI);

    // Display a message when connected successfully
    console.log("MongoDB connected successfully!");
    console.log("Database:", mongoose.connection.name);

  } catch (error) {
    // Display an error if the connection fails
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Export the function so server.js can use it
module.exports = connectDB;
