
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import MongoDB connection
const connectDB = require("./config/db");

// Import Contact API routes
const contactRoutes = require("./server/routes/contactRoutes");

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Portfolio database
connectDB();

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to My Portfolio application."
  });
});

// Register Contact API routes
app.use("/api/contacts", contactRoutes);

// Set backend port
const PORT = process.env.PORT || 5000;

// Start Express server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
