const Joi = require("joi");

// create course
const createCourse = {
  body: Joi.object().keys({
    course_name: Joi.string().required().trim(),
    course_duration: Joi.string().required().trim(),
  }),
};

// Get course list
const getCourseList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get course details by id
const getDetails = {
  params: Joi.object().keys({
    courseId: Joi.string().required().trim(),
  }),
};

// course details update by id
const updateCourseDetails = {
  params: Joi.object().keys({
    courseId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    course_name: Joi.string().trim(),
  }),
};

module.exports = {
  createCourse,
  getDetails,
  getCourseList,
  updateCourseDetails,
};