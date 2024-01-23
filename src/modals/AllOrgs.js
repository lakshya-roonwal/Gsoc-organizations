const mongoose = require("mongoose");

const SingleProjectSchema = new mongoose.Schema({
  contributor: String,
  mentor: String,
  projectTitle: String,
  projectDescription: String,
  viewProjectDetailsURL: String,
  viewProjectCodeURL: String,
});

const allOrgsSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  years: [String],
  technologies: [String],
  topics: [String],
  socials: mongoose.Schema.Types.Mixed,
  websiteURL: String,
  projects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  },
});

const AllOrgs = mongoose.models.AllOrgs || mongoose.model("AllOrgs", allOrgsSchema);

module.exports = AllOrgs;
