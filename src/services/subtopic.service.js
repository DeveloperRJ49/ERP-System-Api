const {Subtopic} = require("../models");

// Craete subtopic
const createSubtopic = async (reqBody) => {
  return Subtopic.create(reqBody);
};

// Get subtopic list
const getSubtopicList = async (filter, options) => {
  return Subtopic.find()
};

// Get subtopic by email
const getSubtopicByEmail = async (email) => {
  return Subtopic.findOne({ email });
};

// Get subtopic by id
const getSubtopicById = async (subtopicId) => {
  return Subtopic.findById(subtopicId);
};

// Update subtopic by id
const updateSubtopicDetails = async (subtopicId, updateBody) => {
  return Subtopic.findByIdAndUpdate(subtopicId, { $set: updateBody });
};

// Delete subtopic by id
const deleteSubtopic = async (subtopicId) => {
  return Subtopic.findByIdAndDelete(subtopicId);
};

module.exports = {
  createSubtopic,
  getSubtopicList,
  getSubtopicById,
  updateSubtopicDetails,
  getSubtopicByEmail,
  deleteSubtopic,
};