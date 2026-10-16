
const Qualification = require("../models/Qualification");

// GET - Retrieve all qualifications
const getQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();

    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET - Retrieve one qualification by ID
const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(
      req.params.id
    );

    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found"
      });
    }

    res.status(200).json(qualification);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// POST - Create a new qualification
const createQualification = async (req, res) => {
  try {
    // Save qualification information in MongoDB
    const qualification = await Qualification.create(req.body);

    res.status(201).json(qualification);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// PUT - Update an existing qualification by ID
const updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found"
      });
    }

    res.status(200).json(qualification);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE - Remove one qualification by ID
const deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(
      req.params.id
    );

    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found"
      });
    }

    res.status(200).json({
      message: "Qualification deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE - Remove all qualifications
const deleteAllQualifications = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});

    res.status(200).json({
      message: "All qualifications deleted successfully",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Export all six Qualification controller functions
module.exports = {
  getQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
};
