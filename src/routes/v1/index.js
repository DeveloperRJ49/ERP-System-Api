const express = require("express");

const userRoute = require("./user.route");
const loginRoute = require("./login.route");
const adminRoute = require("./admin.route.js");
const subadminRoute = require("./subadmin.route.js");
const facultyRoute = require("./faculty.route.js");
const studentRoute = require("./student.route.js");
const batchRoute = require("./batch.route.js");
const courseRoute = require("./course.route.js");
const signinsheetRoute = require("./signinsheet.route.js");
const maintopicRoute = require("./maintopic.route.js");
const subtopicRoute = require("./subtopic.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/login", loginRoute);
router.use("/admin", adminRoute);
router.use("/subadmin", subadminRoute);
router.use("/faculty", facultyRoute);
router.use("/student", studentRoute);
router.use("/batch", batchRoute);
router.use("/course", courseRoute);
router.use("/signinsheet", signinsheetRoute);
router.use("/maintopic", maintopicRoute);
router.use("/subtopic", subtopicRoute);

module.exports = router;