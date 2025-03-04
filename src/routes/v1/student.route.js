const express = require("express");
const { studentValidation } = require("../../validations");
const { studentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create student
router.post(
  "/create",
  validate(studentValidation.createStudent),
  studentController.createStudent
);

// Get student list
router.get(
  "/list",
  validate(studentValidation.getStudentList),
  studentController.getStudentList
);

// Get student details by id
router.get(
  "/get-details/:studentId",
  validate(studentValidation.getDetails),
  studentController.getStudentDetails
);

// student details update by id
router.put(
  "/update/:studentId",
  validate(studentValidation.updateStudentDetails),
  studentController.updateStudentDetails
);

// Delete student
router.delete(
  "/delete/:studentId",
  validate(studentValidation.getDetails),
  studentController.deleteStudent
);

module.exports = router;