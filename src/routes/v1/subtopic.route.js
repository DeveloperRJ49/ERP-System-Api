const express = require("express");
const { subtopicValidation } = require("../../validations");
const { subtopicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create subtopic
router.post(
  "/create",
  validate(subtopicValidation.createSubtopic),
  subtopicController.createSubtopic
);

// Get subtopic list
router.get(
  "/list",
  validate(subtopicValidation.getSubtopicList),
  subtopicController.getSubtopicList
);

// Get subtopic details by id
router.get(
  "/get-details/:subtopicId",
  validate(subtopicValidation.getDetails),
  subtopicController.getSubtopicDetails
);

// subtopic details update by id
router.put(
  "/update/:subtopicId",
  validate(subtopicValidation.updateSubtopicDetails),
  subtopicController.updateSubtopicDetails
);

// Delete subtopic
router.delete(
  "/delete/:subtopicId",
  validate(subtopicValidation.getDetails),
  subtopicController.deleteSubtopic
);

module.exports = router;