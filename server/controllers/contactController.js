
const Contact = require("../models/Contact");

// GET - Retrieve all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// POST - Create a new contact
const createContact = async (req, res) => {
  try {
    // Get all five fields from the React contact form
    const {
      firstname,
      lastname,
      contactNumber,
      email,
      message
    } = req.body;

    // Save the contact information in MongoDB
    const contact = await Contact.create({
      firstname,
      lastname,
      contactNumber,
      email,
      message
    });

    // Return the newly created contact
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// PUT - Update an existing contact
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE - Remove an existing contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Export all controller functions
module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact
};
