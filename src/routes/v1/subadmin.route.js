const express = require("express");
const { subadminValidation } = require("../../validations");
const { subadminController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create subadmin
router.post(
  "/create",
  validate(subadminValidation.createSubadmin),
  subadminController.createSubadmin
);

// Get subadmin list
router.get(
  "/list",
  validate(subadminValidation.getSubadminList),
  subadminController.getSubadminList
);

// Get subadmin details by id
router.get(
  "/get-details/:subadminId",
  validate(subadminValidation.getDetails),
  subadminController.getSubadminDetails
);

// subadmin details update by id
router.put(
  "/update/:subadminId",
  validate(subadminValidation.updateSubadminDetails),
  subadminController.updateSubadminDetails
);

// Delete subadmin
router.delete(
  "/delete/:subadminId",
  validate(subadminValidation.getDetails),
  subadminController.deleteSubadmin
);

module.exports = router;