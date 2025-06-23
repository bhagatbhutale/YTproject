const Video = require("../Models/video")


// videp Upload
exports.uploadVideo = async (req, res) => {
    try {
      const { title, description, videoLink, videoType, thumbnail } = req.body;
      console.log(req.user)

      const videoUpload = new Video({
        user: req.user._id,
        title,
        description,
        videoLink,
        videoType,
        thumbnail
      })

      await videoUpload.save();

      res.status(201).send({
        success: "true",
        videoUpload
      })

    }
    catch (err) {
        res.status(500).send({
            error : "Server Error"
        })
    }
}

// all Videos Render in HomePage
exports.getAllVideo = async(req, res) => {
    try {
        // all vidoe renders on Home page
        const videos = await Video.find().populate("user", " channelName profilePic userName createdAt ")
        res.status(201).send({
            success: "true",
            "videos": videos
        })
    } catch (err) {
      res.status(500).send({
        error: "Server Error",
      });
    }
}

// Specific idVideo watch 
exports.getVideoById = async(req, res) => {
    try {
        let { id } = req.params;
       const video = await Video.findById(id).populate(
         "user",
         " channelName profilePic userName createdAt "
       );
       res.status(201).send({
        success: "true",
        "video": video
       })
    }
    catch (err) {
        res.status(500).send({
            error: "Server Error",
        })
    }
}


//
exports.getAllVideoByUserID = async (req, res) => {
    try {
        let { userId } = req.params;
        const video = await Video.find({ user: userId }).populate(
          "user",
          " channelName profilePic userName createdAt about "
        );
        res.status(201).send({
            success: "true",
            "video": video
        })
    } catch (err) {
      res.status(500).send({
        error: "Server Error",
      });
    }
}


//Delete A Specific Video Using VideoId
exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);

    if (!video) return res.status(404).json({ message: "Video not found" });

    // Only the author can delete the video
    if (video.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await video.deleteOne();
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Edit a Specific Video using VideoId 
exports.updateVideo = async (req, res) => {
  try {
    const { editVideoId } = req.params;
    const { title, description, videoLink, thumbnail, videoType } = req.body;

    const video = await Video.findById(editVideoId);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // Check if the current user is the video owner
    if (video.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    video.title = title;
    video.description = description;
    video.videoLink = videoLink;
    video.thumbnail = thumbnail;
    video.videoType = videoType;

    const updatedVideo = await video.save();
    res.status(200).json({ message: "Video updated", video: updatedVideo });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};




// Video Like or DisLike Controllers 
exports.toggleLike = async (req, res) => {
  try {
    const videoId = req.params.id;
    const userId = req.user._id; // Ensure auth middleware sets this

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ error: "Video not found" });

    const hasLiked = video.like.includes(userId);
    const hasDisliked = video.disLike.includes(userId);

    if (hasLiked) {
      video.like.pull(userId); // remove like
    } else {
      video.like.push(userId); // add like
      if (hasDisliked) video.disLike.pull(userId); // remove dislike if present
    }

    await video.save();
    res.json({
      message: "Updated",
      likes: video.like.length,
      dislikes: video.disLike.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


// DisLike 
exports.toggleDislike = async (req, res) => {
  try {
    const videoId = req.params.id;
    const userId = req.user._id;

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ error: "Video not found" });

    const hasLiked = video.like.includes(userId);
    const hasDisliked = video.disLike.includes(userId);

    if (hasDisliked) {
      video.disLike.pull(userId);
    } else {
      video.disLike.push(userId);
      if (hasLiked) video.like.pull(userId);
    }

    await video.save();
    res.json({
      message: "Updated",
      likes: video.like.length,
      dislikes: video.disLike.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
