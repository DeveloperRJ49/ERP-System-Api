const { adminService, emailService } = require("../services");

// Create admin
const createAdmin = async (req, res) => {
  try {
    const reqBody = req.body;

    const admin = await adminService.createAdmin(reqBody);
    if (!admin) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Admin create successfully!",
      data: { admin },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get admin list
const getAdminList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { admin_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await adminService.getAdminList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get admin list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get admin details by id
const getAdminDetails = async (req, res) => {
  try {
    const getDetails = await adminService.getAdminById(req.params.adminId);
    if (!getDetails) {
      throw new Error("Admin not found!");
    }

    res.status(200).json({
      success: true,
      message: "Admin details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// admin details update by id
const updateAdminDetails = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExists = await adminService.getAdminById(adminId);
    if (!adminExists) {
      throw new Error("Admin not found!");
    }

    await adminService.updateAdminDetails(adminId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Admin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete admin
const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminExists = await adminService.getAdminById(adminId);
    if (!adminExists) {
      throw new Error("Admin not found!");
    }

    await adminService.deleteAdmin(adminId);

    res.status(200).json({
      success: true,
      message: "Admin delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createAdmin,
  getAdminList,
  getAdminDetails,
  updateAdminDetails,
  deleteAdmin,
};