const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batch_name: {
      type: String,
      trim: true,
    },
    batch_status: {
        type: String,
        trim: true,
    },
    start_date:{
        type: Date,
    },
    end_date:{
        type: Date,
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


const Batch = mongoose.model("batch", batchSchema);
module.exports = Batch;
