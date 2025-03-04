const { facultyService, emailService } = require("../services");

// Create faculty
const createFaculty = async (req, res) => {
  try {
    const reqBody = req.body;



    const faculty = await facultyService.createFaculty(reqBody);
    if (!faculty) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "faculty create successfully!",
      data: { faculty },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get faculty list
const getFacultyList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { faculty_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await facultyService.getFacultyList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get faculty list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get faculty details by id
const getFacultyDetails = async (req, res) => {
  try {
    const getDetails = await facultyService.getFacultyById(req.params.facultyId);
    if (!getDetails) {
      throw new Error("Faculty not found!");
    }

    res.status(200).json({
      success: true,
      message: "Faculty details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// faculty details update by id
const updateFacultyDetails = async (req, res) => {
  try {
    const facultyId = req.params.facultyId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!");
    }

    await facultyService.updateFacultyDetails(facultyId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Admin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete faculty
const deleteFaculty = async (req, res) => {
  try {
    const facultyId = req.params.facultyId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!");
    }

    await facultyService.deleteFaculty(facultyId);

    res.status(200).json({
      success: true,
      message: "Faculty delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
//csv added


module.exports = {
  createFaculty,
  getFacultyList,
  getFacultyDetails,
  updateFacultyDetails,
  deleteFaculty,
};