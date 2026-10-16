
const mongoose = require("mongoose");

// Define the structure of an education or qualification
const qualificationSchema = new mongoose.Schema({

  // Name of the degree, diploma, or qualification
  title: {
    type: String,
    required: true,
    trim: true
  },

  // Portfolio owner's first name
  firstname: {
    type: String,
    required: true,
    trim: true
  },

  // Portfolio owner's last name
  lastname: {
    type: String,
    required: true,
    trim: true
  },

  // Portfolio owner's email address
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  // Date the qualification was completed
  completion: {
    type: Date
  },

  // Description of the education or qualification
  description: {
    type: String,
    required: true,
    trim: true
  }

});

// Create and export the Qualification model
// This model uses the "qualifications" collection
module.exports = mongoose.model(
  "Qualification",
  qualificationSchema
);
