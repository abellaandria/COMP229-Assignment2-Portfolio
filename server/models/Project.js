
const mongoose = require("mongoose");

// Define the structure of a portfolio project
const projectSchema = new mongoose.Schema({

  // Title of the project
  title: {
    type: String,
    required: true,
    trim: true
  },

  // Project owner's first name
  firstname: {
    type: String,
    required: true,
    trim: true
  },

  // Project owner's last name
  lastname: {
    type: String,
    required: true,
    trim: true
  },

  // Project owner's email address
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  // Date the project was completed
  completion: {
    type: Date
  },

  // Description of the project
  description: {
    type: String,
    required: true,
    trim: true
  }

});

// Create and export the Project model
// This model uses the "projects" collection
module.exports = mongoose.model("Project", projectSchema);
