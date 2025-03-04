const {Maintopic} = require("../models");

// Craete maintopic
const createMaintopic = async (reqBody) => {
  return Maintopic.create(reqBody);
};

// Get maintopic list
const getMaintopicList = async (filter, options) => {
  return Maintopic.find()
};

// Get maintopic by email
const getMaintopicByEmail = async (email) => {
  return Maintopic.findOne({ email });
};

// Get maintopic by id
const getMaintopicById = async (maintopicId) => {
  return Maintopic.findById(maintopicId);
};

// Update maintopic by id
const updateMaintopicDetails = async (maintopicId, updateBody) => {
  return Maintopic.findByIdAndUpdate(maintopicId, { $set: updateBody });
};

// Delete maintopic by id
const deleteMaintopic = async (maintopicId) => {
  return Maintopic.findByIdAndDelete(maintopicId);
};

module.exports = {
  createMaintopic,
  getMaintopicList,
  getMaintopicById,
  updateMaintopicDetails,
  getMaintopicByEmail,
  deleteMaintopic,
};