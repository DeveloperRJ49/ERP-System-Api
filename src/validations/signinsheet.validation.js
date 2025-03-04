const Joi = require("joi");

// create signinsheet
const createSigninsheet = {
  body: Joi.object().keys({
    signinsheet_name: Joi.string().required().trim(),
    Permissions: Joi.string().required().trim(),
  }),
};

// Get signinsheet list
const getSigninsheetList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get signinsheet details by id
const getDetails = {
  params: Joi.object().keys({
    SigninsheetId: Joi.string().required().trim(),
  }),
};

// signinsheet details update by id
const updateSigninsheetDetails = {
  params: Joi.object().keys({
    signinsheetId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    signinsheet_name: Joi.string().trim(),
  }),
};

module.exports = {
  createSigninsheet,
  getDetails,
  getSigninsheetList,
  updateSigninsheetDetails,
};