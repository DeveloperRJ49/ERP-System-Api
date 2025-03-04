const mongoose = require("mongoose");

const maintopicSchema = new mongoose.Schema(
  {
    maintopic_name: {
      type: String,
      trim: true,
    },
    //sub topic ref


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


const Maintopic = mongoose.model("maintopic", maintopicSchema);
module.exports = Maintopic;
