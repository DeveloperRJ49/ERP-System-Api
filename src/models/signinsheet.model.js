const mongoose = require("mongoose");

const signinsheetSchema = new mongoose.Schema(
  {
    signin_sheet_name: {
      type: String,
      trim: true,
    },
    //admin ref
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },

    //subadmin ref
    subadmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subadmin",
    },

    //faculty ref
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "faculty",
    },

    //student ref
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },

    //main topic ref
    maintopic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "maintopic",
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


const Signinsheet = mongoose.model("signinsheet", signinsheetSchema);
module.exports = Signinsheet;
