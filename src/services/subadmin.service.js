const {Subadmin} = require("../models");

// Craete Subadmin
const createSubadmin = async (reqBody) => {
  return (await Subadmin.create(reqBody)).populate("faculty");
};

// Get subadmin list
const getSubadminList = async (filter, options) => {
  return Subadmin.find().populate("faculty");
};

// Get subadmin by email
const getSubadminByEmail = async (email) => {
  return Subadmin.findOne({ email });
};

// Get subadmin by id
const getSubadminById = async (subadminId) => {
  return Subadmin.findById(subadminId);
};

// Update subadmin by id
const updateSubadminDetails = async (subadminId, updateBody) => {
  return Subadmin.findByIdAndUpdate(subadminId, { $set: updateBody });
};

// Delete subadmin by id
const deleteSubadmin = async (subadminId) => {
  return Subadmin.findByIdAndDelete(subadminId);
};

module.exports = {
  createSubadmin,
  getSubadminList,
  getSubadminById,
  updateSubadminDetails,
  getSubadminByEmail,
  deleteSubadmin,
};