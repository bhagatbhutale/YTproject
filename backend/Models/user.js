
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    about: {
      type: String,
      default: "",
      trim: true,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    //   required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;


