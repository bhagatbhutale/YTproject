const Comment = require("../Models/Comment");


// add comment function
exports.addComment = async (req, res) => {
    try {
       let { video, message } = req.body;
       const comment = await new Comment({ 
        user: req.user._id,
        video,
        message
       })

       await comment.save();

       res.status(201).send({
        message: "Success",
        comment
       })
    }
    catch (err) {
        res.status(500).send({
            error: "Server error"
        })
    }
}


// get comment function 
exports.getCommentByVideoId = async (req, res) => {
    try {
      let { videoId } = req.params;
      const comments = await Comment.find({ video: videoId }).populate(
        "user",
        " channelName profilePic userName createdAt "
      );

      res.status(201).send({
        message: "Success",
        comments,
      });
    } catch (err) {
      res.status(500).send({
        error: "Server error",
      });
    }
}