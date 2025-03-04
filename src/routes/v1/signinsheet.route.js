const express = require("express");
const { signinsheetValidation } = require("../../validations");
const { signinsheetController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create signinsheet
router.post(
  "/create",
  validate(signinsheetValidation.createSigninsheet),
  signinsheetController.createSigninsheet
);

// Get signinsheet list
router.get(
  "/list",
  validate(signinsheetValidation.getSigninsheetList),
  signinsheetController.getSigninsheetList
);

// Get signinsheet details by id
router.get(
  "/get-details/:signinsheetId",
  validate(signinsheetValidation.getDetails),
  signinsheetController.getSigninsheetDetails
);

// signinsheet details update by id
router.put(
  "/update/:signinsheetId",
  validate(signinsheetValidation.updateSigninsheetDetails),
  signinsheetController.updateSigninsheetDetails
);

// Delete signinsheet
router.delete(
  "/delete/:signinsheetId",
  validate(signinsheetValidation.getDetails),
  signinsheetController.deleteSigninsheet
);

module.exports = router;