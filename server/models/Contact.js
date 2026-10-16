
const mongoose = require("mongoose");

// Define the fields for each contact
const contactSchema = new mongoose.Schema({

  // Contact's first name
  firstname: {
    type: String,
    required: true,
    trim: true
  },

  // Contact's last name
  lastname: {
    type: String,
    required: true,
    trim: true
  },

  // Contact's phone number (optional)
  contactNumber: {
    type: String,
    trim: true,
    default: ""
  },

  // Contact's email address
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  // Message submitted through the contact form
  message: {
    type: String,
    required: true,
    trim: true
  }

}, {
  // Automatically record when a contact was created or updated
  timestamps: true
});

// Create and export the Contact model
// This model uses the "contacts" collection
module.exports = mongoose.model("Contact", contactSchema);
