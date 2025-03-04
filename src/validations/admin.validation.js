const Joi = require("joi");

// create admin
const createAdmin = {
  body: Joi.object().keys({
    admin_name: Joi.string().required().trim(),
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};

// Get admin list
const getAdminList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get admin details by id
const getDetails = {
  params: Joi.object().keys({
    adminId: Joi.string().required().trim(),
  }),
};

// admin details update by id
const updateAdminDetails = {
  params: Joi.object().keys({
    adminId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    admin_name: Joi.string().trim(),
  }),
};

module.exports = {
  createAdmin,
  getDetails,
  getAdminList,
  updateAdminDetails,
};