const {Student} = require("../models");

// Craete student
const createStudent = async (reqBody) => {
  return Student.create(reqBody);
};

// Get student list
const getStudentList = async (filter, options) => {
  return Student.find().populate("signinsheet");
};

// Get student by email
const getStudentByEmail = async (email) => {
  return Student.findOne({ email });
};

// Get student by id
const getStudentById = async (studentId) => {
  return Student.findById(studentId);
};

// Update student by id
const updateStudentDetails = async (studentId, updateBody) => {
  return Student.findByIdAndUpdate(studentId, { $set: updateBody });
};

// Delete student by id
const deleteStudent = async (studentId) => {
  return Student.findByIdAndDelete(studentId);
};

module.exports = {
  createStudent,
  getStudentList,
  getStudentById,
  updateStudentDetails,
  getStudentByEmail,
  deleteStudent,
};