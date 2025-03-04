const Joi = require("joi");

// create user
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  }),
};

// Get user list
const getUserList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get user details by id
const getDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
};

// user details update by id
const updateUserDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    user_name: Joi.string().trim(),
  }),
};

module.exports = {
  createUser,
  getDetails,
  getUserList,
  updateUserDetails,
};