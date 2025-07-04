
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // must match the model name of userSchema
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videoLink: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    videoType: {
      type: String,
      //   enum: ["short", "full"],
      default: "All",
    },
    like: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      default: 0,
    }],
    disLike: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: 0,
    }],

  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
