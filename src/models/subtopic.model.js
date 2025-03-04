const mongoose = require("mongoose");

const subtopicSchema = new mongoose.Schema(
  {
    subtopic: [{
      subtopic_name: {type: String, trim: true },
      grade: {  type: String, trim: true },
      feedback: { type: String,trim: true },
      start_date: { type: String, trim: true },
      attendence: { type: String, trim: true },
    },],

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


const Subtopic = mongoose.model("subtopic", subtopicSchema);
module.exports = Subtopic;
