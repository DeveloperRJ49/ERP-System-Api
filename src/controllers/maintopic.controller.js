const { maintopicService, emailService } = require("../services");

// Create maintopic
const createMaintopic = async (req, res) => {
  try {
    const reqBody = req.body;

    const maintopicExists = await maintopicService.getMaintopicByEmail(reqBody.email);
    if (maintopicExists) {
      throw new Error("Maintopic already created by this email!");
    }

    const maintopic = await maintopicService.createMaintopic(reqBody);
    if (!maintopic) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Maintopic create successfully!",
      data: { maintopic },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get maintopic list
const getMaintopicList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { maintopic_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await maintopicService.getMaintopicList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Maintopic list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get maintopic details by id
const getMaintopicDetails = async (req, res) => {
  try {
    const getDetails = await maintopicService.getMaintopicById(req.params.maintopicId);
    if (!getDetails) {
      throw new Error("Maintopic not found!");
    }

    res.status(200).json({
      success: true,
      message: "Maintopic details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// maintopic details update by id
const updateMaintopicDetails = async (req, res) => {
  try {
    const maintopicId = req.params.maintopicId;
    const maintopicExists = await maintopicService.getMaintopicById(maintopicId);
    if (!maintopicExists) {
      throw new Error("Maintopic not found!");
    }

    await maintopicService.updateMaintopicDetails(maintopicId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Maintopic details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete maintopic
const deleteMaintopic = async (req, res) => {
  try {
    const maintopicId = req.params.maintopicId;
    const maintopicExists = await maintopicService.getMaintopicById(maintopicId);
    if (!maintopicExists) {
      throw new Error("Maintopic not found!");
    }

    await maintopicService.deleteMaintopic(maintopicId);

    res.status(200).json({
      success: true,
      message: "Maintopic delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createMaintopic,
  getMaintopicList,
  getMaintopicDetails,
  updateMaintopicDetails,
  deleteMaintopic,
};