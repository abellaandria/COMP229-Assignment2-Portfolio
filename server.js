
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import MongoDB connection
const connectDB = require("./config/db");

// Import API routes
const contactRoutes = require("./server/routes/contactRoutes");
const projectRoutes = require("./server/routes/projectRoutes");
const qualificationRoutes = require("./server/routes/qualificationRoutes");
const userRoutes = require("./server/routes/userRoutes");
const authRoutes = require("./server/routes/authRoutes");

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
    message: "Welcome to My Portfolio application.",
    status: "Updated server is running"
  });
});

// Register Contact API routes
app.use("/api/contacts", contactRoutes);

// Register Project API routes
app.use("/api/projects", projectRoutes);

// Register Qualification API routes
app.use("/api/qualifications", qualificationRoutes);

// Register User API routes (JWT protected)
app.use("/api/users", userRoutes);

// Register Authentication API routes
app.use("/api/auth", authRoutes);

// Set backend port
const PORT = process.env.PORT || 5000;

// Start Express server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log("Contact API: /api/contacts");
  console.log("Project API: /api/projects");
  console.log("Qualification API: /api/qualifications");
  console.log("User API: /api/users (protected)");
  console.log("Authentication API: /api/auth");
});
