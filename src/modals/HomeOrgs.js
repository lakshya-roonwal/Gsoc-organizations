const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
  description: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
  imageUrl: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
  years: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
  technologies: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
  topics: { type: mongoose.Schema.Types.ObjectId, ref: "AllOrgs" },
});

// Create the model for the simplified collection
const Projects = mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;
