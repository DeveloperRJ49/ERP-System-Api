const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "subadmin", "faculty",  "student"],
    },
    profile_info: {
      type: String,
      trim: true,
    },
    created_at:{
        type: Date,
    },
    updated_at:{
        type: Date,
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

// userSchema.pre("save", async function(next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password =await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

const User = mongoose.model("users", userSchema);
module.exports = User;
