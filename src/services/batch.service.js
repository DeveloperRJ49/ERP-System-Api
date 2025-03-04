const {Batch} = require("../models");

// Craete batch
const createBatch = async (reqBody) => {
  return Batch.create(reqBody);
};

// Get batch list
const getBatchList = async (filter, options) => {
  return Batch.find().populate("student").populate("faculty");
};

// Get batch by email
const getBatchByEmail = async (email) => {
  return Batch.findOne({ email });
};

// Get batch by id
const getBatchById = async (batchId) => {
  return Batch.findById(batchId);
};

// Update batch by id
const updateBatchDetails = async (batchId, updateBody) => {
  return Batch.findByIdAndUpdate(batchId, { $set: updateBody });
};

// Delete batch by id
const deleteBatch = async (batchId) => {
  return Batch.findByIdAndDelete(batchId);
};

module.exports = {
  createBatch,
  getBatchList,
  getBatchById,
  updateBatchDetails,
  getBatchByEmail,
  deleteBatch,
};