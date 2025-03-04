const {Signinsheet} = require("../models");
const Faculty = require("../models/faculty.model");

// Craete signinsheet
const createSigninsheet = async (reqBody) => {
  return Signinsheet.create(reqBody);
};

// Get signinsheet list
const getSigninsheetList = async (filter, options) => {
  return Signinsheet.find().populate("admin").populate("subadmin").populate("faculty").populate("student").populate("maintopic");
};

// Get signinsheet by email
const getSigninsheetByEmail = async (email) => {
  return Signinsheet.findOne({ email });
};

// Get signinsheet by id
const getSigninsheetById = async (signinsheetId) => {
  return Signinsheet.findById(signinsheetId);
};

// Update signinsheet by id
const updateSigninsheetDetails = async (signinsheetId, updateBody) => {
  return Signinsheet.findByIdAndUpdate(signinsheetId, { $set: updateBody });
};

// Delete signinsheet by id
const deleteSigninsheet = async (signinsheetId) => {
  return Signinsheet.findByIdAndDelete(signinsheetId);
};

module.exports = {
  createSigninsheet,
  getSigninsheetList,
  getSigninsheetById,
  updateSigninsheetDetails,
  getSigninsheetByEmail,
  deleteSigninsheet,
};