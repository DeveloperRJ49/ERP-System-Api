const Joi = require("joi");

// create batch
const createBatch = {
  body: Joi.object().keys({
    batch_name: Joi.string().required().trim(),
    batch_status: Joi.string().required().trim(),
    start_date: Joi.date().iso(),
    end_date: Joi.date().iso(),
  }),
};

// Get batch list
const getBatchList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get Batch details by id
const getDetails = {
  params: Joi.object().keys({
    batchId: Joi.string().required().trim(),
  }),
};

// batch details update by id
const updateBatchDetails = {
  params: Joi.object().keys({
    batchId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    batch_name: Joi.string().trim(),
  }),
};

module.exports = {
  createBatch,
  getDetails,
  getBatchList,
  updateBatchDetails,
};