const express = require("express");
const { maintopicValidation } = require("../../validations");
const { maintopicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create maintopic
router.post(
  "/create",
  validate(maintopicValidation.createMaintopic),
  maintopicController.createMaintopic
);

// Get maintopic list
router.get(
  "/list",
  validate(maintopicValidation.getMaintopicList),
  maintopicController.getMaintopicList
);

// Get maintopic details by id
router.get(
  "/get-details/:maintopicId",
  validate(maintopicValidation.getDetails),
  maintopicController.getMaintopicDetails
);

// maintopic details update by id
router.put(
  "/update/:maintopicId",
  validate(maintopicValidation.updateMaintopicDetails),
  maintopicController.updateMaintopicDetails
);

// Delete maintopic
router.delete(
  "/delete/:maintopicId",
  validate(maintopicValidation.getDetails),
  maintopicController.deleteMaintopic
);

module.exports = router;