const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  contributor: String,
  mentor: String,
  projectTitle: String,
  projectDescription: String,
  viewProjectDetailsURL: String,
  viewProjectCodeURL: String,
});

const xsfSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  years: [String],
  technologies: [String],
  topics: [String],
  socials: mongoose.Schema.Types.Mixed,
  websiteURL: String,
  projects: [
    {
      [String]: [projectSchema], // Dynamic key-value pair
    },
  ],
});

const AllOrgs = mongoose.models.AllOrgs || mongoose.model("AllOrgs", xsfSchema);

module.exports = AllOrgs;
