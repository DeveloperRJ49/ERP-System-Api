const Joi = require("joi");

// create faculty
const createFaculty = {
  body: Joi.object().keys({
    faculty_name: Joi.string().required().trim(),
    department: Joi.string().required().trim(),
    gender: Joi.string().required().trim(),
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};


module.exports = {
  createFaculty,
};