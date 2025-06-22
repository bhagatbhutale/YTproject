const mongoose = require("mongoose");
// userSchema
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
    banner: {
      type: String,
      default:
        "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?_gl=1*hcd4jh*_ga*NDkzOTQ5MDExLjE2ODY5MzI2NzM.*_ga_8JE65Q40S6*czE3NTA0NTczNDMkbzI5JGcxJHQxNzUwNDU3NDA2JGo2MCRsMCRoMA..",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;


