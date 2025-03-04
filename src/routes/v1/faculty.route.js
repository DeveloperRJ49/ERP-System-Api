const express = require("express");
const { facultyValidation } = require("../../validations");
const { facultyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create faculty
router.post(
  "/create-faculty",
  validate(facultyValidation.createFaculty),
  facultyController.createFaculty
);

// Get faculty list
router.get(
  "/list",
  validate(facultyValidation.getFacultyList),
  facultyController.getFacultyList
);

// Get faculty details by id
router.get(
  "/get-details/:facultyId",
  validate(facultyValidation.getDetails),
  facultyController.getFacultyDetails
);

// faculty details update by id
router.put(
  "/update/:facultyId",
  validate(facultyValidation.updateFacultyDetails),
  facultyController.updateFacultyDetails
);

// Delete faculty
router.delete(
  "/delete/:facultyId",
  validate(facultyValidation.getDetails),
  facultyController.deleteFaculty
);

module.exports = router;