const {Course} = require("../models");

// Craete course
const createCourse = async (reqBody) => {
  return Course.create(reqBody);
};

// Get course list
const getCourseList = async (filter, options) => {
  return Course.find().populate("student");
};

// Get course by email
const getCourseByEmail = async (email) => {
  return Course.findOne({ email });
};

// Get course by id
const getCourseById = async (courseId) => {
  return Course.findById(courseId);
};

// Update course by id
const updateCourseDetails = async (courseId, updateBody) => {
  return Course.findByIdAndUpdate(courseId, { $set: updateBody });
};

// Delete course by id
const deleteCourse = async (courseId) => {
  return Course.findByIdAndDelete(courseId);
};

module.exports = {
  createCourse,
  getCourseList,
  getCourseById,
  updateCourseDetails,
  getCourseByEmail,
  deleteCourse,
};