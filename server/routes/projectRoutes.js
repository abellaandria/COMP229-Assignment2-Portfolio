
const express = require("express");
const router = express.Router();

// Import all six Project controller functions
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
} = require("../controllers/projectController");

// GET - Retrieve all projects
router.get("/", getProjects);

// GET - Retrieve one project by ID
router.get("/:id", getProjectById);

// POST - Create a new project
router.post("/", createProject);

// PUT - Update a project by ID
router.put("/:id", updateProject);

// DELETE - Remove all projects
router.delete("/", deleteAllProjects);

// DELETE - Remove one project by ID
router.delete("/:id", deleteProject);

// Export the router
module.exports = router;
