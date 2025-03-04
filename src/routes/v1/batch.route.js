const express = require("express");
const { batchValidation } = require("../../validations");
const { batchController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create batch
router.post(
  "/create",
  validate(batchValidation.createBatch),
  batchController.createBatch
);

// Get batch list
router.get(
  "/list",
  validate(batchValidation.getBatchList),
  batchController.getBatchList
);

// Get batch details by id
router.get(
  "/get-details/:batchId",
  validate(batchValidation.getDetails),
  batchController.getBatchDetails
);

// batch details update by id
router.put(
  "/update/:batchId",
  validate(batchValidation.updateBatchDetails),
  batchController.updateBatchDetails
);

// Delete batch
router.delete(
  "/delete/:batchId",
  validate(batchValidation.getDetails),
  batchController.deleteBatch
);

module.exports = router;