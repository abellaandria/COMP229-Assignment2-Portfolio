
const User = require("../models/User");

// GET - Retrieve all users (without passwords)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET - Retrieve one user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST - Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // The User model hashes the password before saving
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT - Update a user by ID
const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Only update these fields to avoid unsafe password changes
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, updated: new Date() },
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE - Remove one user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE - Remove all users
const deleteAllUsers = async (req, res) => {
  try {
    const result = await User.deleteMany({});

    res.status(200).json({
      message: "All users deleted successfully",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export all six User controller functions
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
};
