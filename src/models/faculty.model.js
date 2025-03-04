const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    faculty_name: {
      type: String,
      trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: "bnw_faculty"
    },
    gender: {
      type: String,
      enum: ['m', 'M', 'f', 'F', 'Male', "male", "Female", "female"],
    },


    //student ref
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
    //batch ref
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
    },
    //signinsheet ref
    signinsheet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "signinsheet",
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const Faculty = mongoose.model("faculty", facultySchema);
module.exports = Faculty;
