const {Faculty} = require("../models");

// Craete faculty
const createFaculty = async (reqBody) => {
  return Faculty.create(reqBody);
};


// Get faculty list
const getFacultyList = async (filter, options) => {
  return Faculty.find().populate("student").populate("batch").populate("signinsheet");
};

// Get faculty by email
const getFacultyByEmail = async (email) => {
  return Faculty.findOne({ email });
};

// Get faculty by id
const getFacultyById = async (facultyId) => {
  return Faculty.findById(facultyId);
};

// Update faculty by id
const updateFacultyDetails = async (facultyId, updateBody) => {
  return Faculty.findByIdAndUpdate(facultyId, { $set: updateBody });
};

// Delete faculty by id
const deleteFaculty = async (facultyId) => {
  return Faculty.findByIdAndDelete(facultyId);
};

module.exports = {
  createFaculty,
  getFacultyList,
  getFacultyById,
  updateFacultyDetails,
  getFacultyByEmail,
  deleteFaculty,
};