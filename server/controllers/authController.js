
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate a JWT token for a logged-in user
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// POST - Log in a user
const loginUser = async (req, res) => {
  try {
    // Get the email and password from the request
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required."
      });
    }

    // Find the user and include the password for verification
    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select("+password");

    // Check if the user exists and password matches
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        message: "Invalid email or password."
      });
    }

    // Generate a token after successful login
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to log in."
    });
  }
};

// POST - Log out a user
const logoutUser = (req, res) => {
  // JWT logout is handled by discarding the token on the client.
  // This endpoint confirms the logout request.
  res.status(200).json({
    message: "Logout successful. Please discard your token."
  });
};

// Export authentication functions
module.exports = {
  loginUser,
  logoutUser
};
