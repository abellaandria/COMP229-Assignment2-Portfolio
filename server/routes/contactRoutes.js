
const express = require("express");
const router = express.Router();

// Import the Contact controller functions
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController");

// GET - Retrieve all contacts
router.get("/", getContacts);

// POST - Add a new contact
router.post("/", createContact);

// PUT - Update a contact by ID
router.put("/:id", updateContact);

// DELETE - Remove a contact by ID
router.delete("/:id", deleteContact);

// Export the router
module.exports = router;
