const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create user
router.post(
  "/create",
  validate(userValidation.createUser),
  userController.createUser
);

// Get user lis
router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
);

// Get user details by id
router.get(
  "/get-details/:userId",
  validate(userValidation.getDetails),
  userController.getUserDetails
);

// user details update by id
router.put(
  "/update/:userId",
  validate(userValidation.updateUserDetails),
  userController.updateUserDetails
);

// Delete user
router.delete(
  "/delete/:userId",
  validate(userValidation.getDetails),
  userController.deleteUser
);

router.get(
  "/allusers",
  validate(userValidation.getAllUser),
  userController.getAllUser
);

module.exports = router;