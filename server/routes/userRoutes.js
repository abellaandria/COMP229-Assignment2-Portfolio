
const express = require("express");
const router = express.Router();

// Import all six User controller functions
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
} = require("../controllers/userController");

// Import JWT authentication middleware
const { protect } = require("../middleware/authMiddleware");

// GET - Retrieve all users (protected)
router.get("/", protect, getUsers);

// GET - Retrieve one user by ID (protected)
router.get("/:id", protect, getUserById);

// POST - Create a new user (protected)
router.post("/", protect, createUser);

// PUT - Update a user by ID (protected)
router.put("/:id", protect, updateUser);

// DELETE - Remove all users (protected)
router.delete("/", protect, deleteAllUsers);

// DELETE - Remove one user by ID (protected)
router.delete("/:id", protect, deleteUser);

// Export the router
module.exports = router;
