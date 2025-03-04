const Joi = require("joi");

// create maintopic
const createMaintopic = {
  body: Joi.object().keys({
    maintopic_name: Joi.string().required().trim(),
  }),
};

// Get maintopic list
const getMaintopicList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get maintopic details by id
const getDetails = {
  params: Joi.object().keys({
    maintopicId: Joi.string().required().trim(),
  }),
};

// maintopic details update by id
const updateMaintopicDetails = {
  params: Joi.object().keys({
    maintopicId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    maintopic_name: Joi.string().trim(),
  }),
};

module.exports = {
  createMaintopic,
  getDetails,
  getMaintopicList,
  updateMaintopicDetails,
};