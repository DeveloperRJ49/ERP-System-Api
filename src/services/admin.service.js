const {Admin} = require("../models");

// Craete admin
const createAdmin = async (reqBody) => {
  return Admin.create(reqBody);
};

// Get admin list
const getAdminList = async (filter, options) => {
  return Admin.find().populate("subadmin");
};

// Get admin by email
const getAdminByEmail = async (email) => {
  return Admin.findOne({ email });
};

// Get admin by id
const getAdminById = async (adminId) => {
  return Admin.findById(adminId);
};

// Update admin by id
const updateAdminDetails = async (adminId, updateBody) => {
  return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

// Delete admin by id
const deleteAdmin = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

module.exports = {
  createAdmin,
  getAdminList,
  getAdminById,
  updateAdminDetails,
  getAdminByEmail,
  deleteAdmin,
};