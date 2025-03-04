const express = require("express");
const { courseValidation } = require("../../validations");
const { courseController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create course
router.post(
  "/create",
  validate(courseValidation.createCourse),
  courseController.createCourse
);

// Get course list
router.get(
  "/list",
  validate(courseValidation.getCourseList),
  courseController.getCourseList
);

// Get course details by id
router.get(
  "/get-details/:courseId",
  validate(courseValidation.getDetails),
  courseController.getCourseDetails
);

// course details update by id
router.put(
  "/update/:courseId",
  validate(courseValidation.updateCourseDetails),
  courseController.updateCourseDetails
);

// Delete course
router.delete(
  "/delete/:courseId",
  validate(courseValidation.getDetails),
  courseController.deleteCourse
);

module.exports = router;