
const jwt = require("jsonwebtoken");

// Middleware to verify a user's JWT token
const protect = (req, res, next) => {
  try {
    // Get the Authorization header
    const authHeader = req.headers.authorization;

    // Check if a Bearer token was provided
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    // Verify the token using our secret key
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store the authenticated user's ID
    req.user = decoded;

    // Allow the request to continue
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token."
    });
  }
};

// Export the middleware
module.exports = { protect };
