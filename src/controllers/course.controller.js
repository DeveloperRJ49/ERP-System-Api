const { courseService, emailService } = require("../services");

// Create course
const createCourse = async (req, res) => {
  try {
    const reqBody = req.body;

    const courseExists = await courseService.getCourseByEmail(reqBody.email);
    if (courseExists) {
      throw new Error("Course already created by this email!");
    }

    const course = await courseService.createCourse(reqBody);
    if (!course) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Course create successfully!",
      data: { course },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get course list
const getCourseList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { course_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await courseService.getCourseList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get course list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get course details by id
const getCourseDetails = async (req, res) => {
  try {
    const getDetails = await courseService.getCourseById(req.params.courseId);
    if (!getDetails) {
      throw new Error("Course not found!");
    }

    res.status(200).json({
      success: true,
      message: "Course details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// course details update by id
const updateCourseDetails = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseExists = await courseService.getCourseById(courseId);
    if (!courseExists) {
      throw new Error("Course not found!");
    }

    await courseService.updateCourseDetails(courseId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Course details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseExists = await courseService.getCourseById(courseId);
    if (!courseExists) {
      throw new Error("Course not found!");
    }

    await courseService.deleteCourse(courseId);

    res.status(200).json({
      success: true,
      message: "Course delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createCourse,
  getCourseList,
  getCourseDetails,
  updateCourseDetails,
  deleteCourse,
};