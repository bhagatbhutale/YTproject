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

// Delete Comment
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Only allow the user who created the comment to delete it
    if (comment.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this comment" });
    }

    await comment.deleteOne(); // findByIdAndDelete(comment._id)

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};