const { signinsheetService, emailService } = require("../services");

// Create signinsheet
const createSigninsheet = async (req, res) => {
  try {
    const reqBody = req.body;

    const signinsheetExists = await signinsheetService.getSigninsheetByEmail(reqBody.email);
    if (signinsheetExists) {
      throw new Error("Signinsheet already created by this email!");
    }

    const signinsheet = await signinsheetService.createSigninsheet(reqBody);
    if (!signinsheet) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Signinsheet create successfully!",
      data: { signinsheet },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get signinsheet list
const getSigninsheetList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { signinsheet_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await signinsheetService.getSigninsheetList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get signinsheet list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get signinsheet details by id
const getSigninsheetDetails = async (req, res) => {
  try {
    const getDetails = await signinsheetService.getSigninsheetById(req.params.signinsheetId);
    if (!getDetails) {
      throw new Error("Signinsheet not found!");
    }

    res.status(200).json({
      success: true,
      message: "Signinsheet details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// signinsheet details update by id
const updateSigninsheetDetails = async (req, res) => {
  try {
    const signinsheetId = req.params.signinsheetId;
    const signinsheetExists = await signinsheetService.getSigninsheetById(signinsheetId);
    if (!signinsheetExists) {
      throw new Error("Signinsheet not found!");
    }

    await signinsheetService.updateSigninsheetDetails(signinsheetId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Signinsheet details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete signinsheet
const deleteSigninsheet = async (req, res) => {
  try {
    const signinsheetId = req.params.signinsheetId;
    const signinsheetExists = await signinsheetService.getSigninsheetById(signinsheetId);
    if (!signinsheetExists) {
      throw new Error("Signinsheet not found!");
    }

    await signinsheetService.deleteSigninsheet(signinsheetId);

    res.status(200).json({
      success: true,
      message: "Signinsheet delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createSigninsheet,
  getSigninsheetList,
  getSigninsheetDetails,
  updateSigninsheetDetails,
  deleteSigninsheet,
};