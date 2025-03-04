const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      trim: true,
    },
    course_duration: {
        type: String,
        trim: true,
      },

    //student ref
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
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


const Course = mongoose.model("course", courseSchema);
module.exports = Course;
