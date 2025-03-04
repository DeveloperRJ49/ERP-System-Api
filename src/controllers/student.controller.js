const { studentService, emailService } = require("../services");

// Create student
const createStudent = async (req, res) => {
  try {
    const reqBody = req.body;

    const student = await studentService.createStudent(reqBody);
    if (!student) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Student create successfully!",
      data: { student },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get student list
const getStudentList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { student_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await studentService.getStudentList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Student list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get Student details by id
const getStudentDetails = async (req, res) => {
  try {
    const getDetails = await studentService.getStudentById(req.params.studentId);
    if (!getDetails) {
      throw new Error("Student not found!");
    }

    res.status(200).json({
      success: true,
      message: "Student details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// student details update by id
const updateStudentDetails = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentExists = await studentService.getStudentById(studentId);
    if (!studentExists) {
      throw new Error("Student not found!");
    }

    await studentService.updateStudentDetails(studentId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Student details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentExists = await studentService.getStudentById(studentId);
    if (!studentExists) {
      throw new Error("Student not found!");
    }

    await studentService.deleteStudent(studentId);

    res.status(200).json({
      success: true,
      message: "Student delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createStudent,
  getStudentList,
  getStudentDetails,
  updateStudentDetails,
  deleteStudent,
};