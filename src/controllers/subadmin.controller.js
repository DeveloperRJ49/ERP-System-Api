const { subadminService, emailService } = require("../services");

// Create subadmin
const createSubadmin = async (req, res) => {
  try {
    const reqBody = req.body;

    const subadmin = await subadminService.createSubadmin(reqBody);
    if (!subadmin) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Subadmin create successfully!",
      data: { subadmin },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get subadmin list
const getSubadminList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { subadmin_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await subadminService.getSubadminList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get subadmin list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get subadmin details by id
const getSubadminDetails = async (req, res) => {
  try {
    const getDetails = await subadminService.getSubadminById(req.params.subadminId);
    if (!getDetails) {
      throw new Error("Subadmin not found!");
    }

    res.status(200).json({
      success: true,
      message: "Subadmin details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// subadmin details update by id
const updateSubadminDetails = async (req, res) => {
  try {
    const subadminId = req.params.subadminId;
    const subadminExists = await subadminService.getSubadminById(subadminId);
    if (!subadminExists) {
      throw new Error("Subadmin not found!");
    }

    await subadminService.updateSubadminDetails(subadminId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Admin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete subadmin
const deleteSubadmin = async (req, res) => {
  try {
    const subadminId = req.params.subadminId;
    const subadminExists = await subadminService.getSubadminById(subadminId);
    if (!subadminExists) {
      throw new Error("Subadmin not found!");
    }

    await subadminService.deleteSubadmin(subadminId);

    res.status(200).json({
      success: true,
      message: "Subadmin delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createSubadmin,
  getSubadminList,
  getSubadminDetails,
  updateSubadminDetails,
  deleteSubadmin,
};