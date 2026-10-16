
const Project = require("../models/Project");

// GET - Retrieve all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET - Retrieve one project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// POST - Create a new project
const createProject = async (req, res) => {
  try {
    // Save the project information to MongoDB
    const project = await Project.create(req.body);

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// PUT - Update an existing project by ID
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE - Remove one project by ID
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(
      req.params.id
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// DELETE - Remove all projects
const deleteAllProjects = async (req, res) => {
  try {
    const result = await Project.deleteMany({});

    res.status(200).json({
      message: "All projects deleted successfully",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Export all six Project controller functions
module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
};
