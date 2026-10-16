
const express = require("express");
const router = express.Router();

// Import all six Contact controller functions
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} = require("../controllers/contactController");

// GET - Retrieve all contacts
router.get("/", getContacts);

// GET - Retrieve one contact by ID
router.get("/:id", getContactById);

// POST - Add a new contact
router.post("/", createContact);

// PUT - Update a contact by ID
router.put("/:id", updateContact);

// DELETE - Remove all contacts
router.delete("/", deleteAllContacts);

// DELETE - Remove one contact by ID
router.delete("/:id", deleteContact);

// Export the router
module.exports = router;
