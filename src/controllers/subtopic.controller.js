const { subtopicService, emailService } = require("../services");

// Create subtopic
const createSubtopic = async (req, res) => {
  try {
    const reqBody = req.body;

    const subtopicExists = await subtopicService.getSubtopicByEmail(reqBody.email);
    if (subtopicExists) {
      throw new Error("Subtopic already created by this email!");
    }

    const subtopic = await subtopicService.createSubtopic(reqBody);
    if (!subtopic) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Subtopic create successfully!",
      data: { subtopic },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get subtopic list
const getSubtopicList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Subtopic_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await subtopicService.getSubtopicList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Subtopic list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get subtopic details by id
const getSubtopicDetails = async (req, res) => {
  try {
    const getDetails = await subtopicService.getsubtopicById(req.params.subtopicId);
    if (!getDetails) {
      throw new Error("subtopic not found!");
    }

    res.status(200).json({
      success: true,
      message: "Subtopic details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// subtopic details update by id
const updateSubtopicDetails = async (req, res) => {
  try {
    const subtopicId = req.params.subtopicId;
    const subtopicExists = await subtopicService.getSubtopicById(subtopicId);
    if (!subtopicExists) {
      throw new Error("Subtopic not found!");
    }

    await subtopicService.updateSubtopicDetails(subtopicId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Subtopic details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete subtopic
const deleteSubtopic = async (req, res) => {
  try {
    const subtopicId = req.params.subtopicId;
    const subtopicExists = await subtopicService.getSubtopicById(subtopicId);
    if (!subtopicExists) {
      throw new Error("Subtopic not found!");
    }

    await subtopicService.deletesubtopic(subtopicId);

    res.status(200).json({
      success: true,
      message: "Subtopic delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createSubtopic,
  getSubtopicList,
  getSubtopicDetails,
  updateSubtopicDetails,
  deleteSubtopic,
};