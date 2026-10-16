
require("dotenv").config();

const mongoose = require("mongoose");
const readline = require("readline");
const User = require("./server/models/User");

// Ask for credentials without hardcoding them
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const seedUser = async () => {
  try {
    // Connect to the Portfolio MongoDB database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    // Ask for test user information
    const name = (await ask("Enter test user name: ")).trim();
    const email = (await ask("Enter test user email: "))
      .trim()
      .toLowerCase();
    const password = await ask("Enter test user password: ");

    // Validate the information
    if (!name || !email || password.length < 12) {
      throw new Error(
        "Name, email, and a password of at least 12 characters are required."
      );
    }

    // Prevent duplicate users
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("A user with this email already exists.");
      return;
    }

    // User.js automatically hashes the password
    await User.create({
      name,
      email,
      password
    });

    console.log("Test user created successfully!");
    console.log("You can now test the login API.");

  } catch (error) {
    console.error("Setup failed:", error.message);
  } finally {
    rl.close();
    await mongoose.disconnect();
  }
};

seedUser();
