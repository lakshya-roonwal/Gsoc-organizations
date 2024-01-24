const mongoose = require("mongoose");

const SingleProjectSchema = new mongoose.Schema({
  contributor: String,
  mentor: String,
  projectTitle: String,
  projectDescription: String,
  viewProjectDetailsURL: String,
  viewProjectCodeURL: String,
});

const projectsSchema=new mongoose.Schema({
    ['String']:[SingleProjectSchema]
})

const allOrgsSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  years: [String],
  technologies: [String],
  topics: [String],
  socials: mongoose.Schema.Types.Mixed,
  websiteURL: String,
  projects: [
    projectsSchema
  ]
});

const AllOrgs = mongoose.models.AllOrgs || mongoose.model("AllOrgs", allOrgsSchema);

const Projects =
  mongoose.models.Projects || mongoose.model("projects", projectsSchema);


module.exports = {AllOrgs,Projects};
