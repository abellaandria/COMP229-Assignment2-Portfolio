
const express = require("express");
const router = express.Router();

// Import login and logout controller functions
const {
  loginUser,
  logoutUser
} = require("../controllers/authController");

// Import JWT authentication middleware
const { protect } = require("../middleware/authMiddleware");

// POST - Login with email and password
router.post("/login", loginUser);

// POST - Logout (requires a valid JWT)
router.post("/logout", protect, logoutUser);

// Export authentication routes
module.exports = router;
