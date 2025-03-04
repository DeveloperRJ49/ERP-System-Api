const Joi = require("joi");

// create subadmin
const createSubadmin = {
  body: Joi.object().keys({
    subadmin_name: Joi.string().required().trim(),
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    faculty: Joi.string().required(),
  }),
};

// Get subadmin list
const getSubadminList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get subadmin details by id
const getDetails = {
  params: Joi.object().keys({
    subadminId: Joi.string().required().trim(),
  }),
};

// subadmin details update by id
const updateSubadminDetails = {
  params: Joi.object().keys({
    subadminId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    subadmin_name: Joi.string().trim(),
  }),
};

module.exports = {
  createSubadmin,
  getDetails,
  getSubadminList,
  updateSubadminDetails,
};