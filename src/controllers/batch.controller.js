const { batchService, emailService } = require("../services");

// Create batch
const createBatch = async (req, res) => {
  try {
    const reqBody = req.body;

    const batchExists = await batchService.getBatchByEmail(reqBody.email);
    if (batchExists) {
      throw new Error("Batch already created by this email!");
    }

    const batch = await batchService.createBatch(reqBody);
    if (!batch) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Batch create successfully!",
      data: { batch },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get batch list
const getBatchList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { batch_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await batchService.getBatchList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get batch list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get batch details by id
const getBatchDetails = async (req, res) => {
  try {
    const getDetails = await batchService.getBatchById(req.params.batchId);
    if (!getDetails) {
      throw new Error("Batch not found!");
    }

    res.status(200).json({
      success: true,
      message: "Batch details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// batch details update by id
const updateBatchDetails = async (req, res) => {
  try {
    const batchId = req.params.batchId;
    const batchExists = await batchService.getBatchById(batchId);
    if (!batchExists) {
      throw new Error("Batch not found!");
    }

    await batchService.updateBatchDetails(batchId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Batch details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete batch
const deleteBatch = async (req, res) => {
  try {
    const batchId = req.params.batchId;
    const batchExists = await batchService.getBatchById(batchId);
    if (!batchExists) {
      throw new Error("Batch not found!");
    }

    await batchService.deleteBatch(batchId);

    res.status(200).json({
      success: true,
      message: "Batch delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createBatch,
  getBatchList,
  getBatchDetails,
  updateBatchDetails,
  deleteBatch,
};