const {User} = require("../models");

// Craete user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

// Get user list
const getUserList = async (filter, options) => {
  return User.find()
};

// Get user by email
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

// Get user by id
const getUserById = async (userId) => {
  return User.findById(userId);
};

// Update user by id
const updateUserDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

// Delete user by id
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};
//get user role
const getAllUser = async (role) => {
  return await User.find(role);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUserDetails,
  getUserByEmail,
  deleteUser,
  getAllUser,
};