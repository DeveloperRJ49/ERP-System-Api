const mongoose = require("mongoose");

const subadminSchema = new mongoose.Schema(
  {
    subadmin_name: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      default: "bnw_456"
    },
    created_at:{
        type: Date,
    },
    updated_at:{
        type: Date,
    },

    //faculty ref
    faculty: {
      type: mongoose.Types.ObjectId,
      ref: "faculty",
    },

    //student ref
    //student: {
      //type: mongoose.Types.ObjectId,
      //ref: "student",
    //},

    //batch ref
    //batch: {
      //type: mongoose.Types.ObjectId,
      //ref: "batch",
    //},

    //course ref
    //course: {
      //type: mongoose.Types.ObjectId,
      //ref: "course",
    //},
    //signinsheet ref
    //signinsheet: {
      //type: mongoose.Types.ObjectId,
      //ref: "signinsheet",
    //},
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


const Subadmin = mongoose.model("subadmin", subadminSchema);
module.exports = Subadmin;
