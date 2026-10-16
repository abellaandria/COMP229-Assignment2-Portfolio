
const express = require("express");
const router = express.Router();

// Import all six Qualification controller functions
const {
  getQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} = require("../controllers/qualificationController");

// GET - Retrieve all qualifications
router.get("/", getQualifications);

// GET - Retrieve one qualification by ID
router.get("/:id", getQualificationById);

// POST - Create a new qualification
router.post("/", createQualification);

// PUT - Update a qualification by ID
router.put("/:id", updateQualification);

// DELETE - Remove all qualifications
router.delete("/", deleteAllQualifications);

// DELETE - Remove one qualification by ID
router.delete("/:id", deleteQualification);

// Export the router
module.exports = router;
