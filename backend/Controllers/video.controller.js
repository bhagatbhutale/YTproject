const Video = require("../Models/video");


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