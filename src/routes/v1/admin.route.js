const express = require("express");
const { adminValidation } = require("../../validations");
const { adminController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create admin
router.post(
  "/create",
  validate(adminValidation.createAdmin),
  adminController.createAdmin
);

// Get admin list
router.get(
  "/list",
  validate(adminValidation.getAdminList),
  adminController.getAdminList
);

// Get admin details by id
router.get(
  "/get-details/:adminId",
  validate(adminValidation.getDetails),
  adminController.getAdminDetails
);

// admin details update by id
router.put(
  "/update/:adminId",
  validate(adminValidation.updateAdminDetails),
  adminController.updateAdminDetails
);

// Delete admin
router.delete(
  "/delete/:adminId",
  validate(adminValidation.getDetails),
  adminController.deleteAdmin
);

module.exports = router;