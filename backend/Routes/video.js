const express = require("express");
const router = express.Router();
const videoController = require("../Controllers/video.controller")

// check user login or Not user is Login then upload a Video
const auth = require("../Middleware/authentication")

// Video Routes: Video Post Using Cloudinary 
router.post("/video", auth , videoController.uploadVideo)
// all Videos
router.get("/allVideo", videoController.getAllVideo);
// specific video watch (get)
router.get("/getVideoById/:id", videoController.getVideoById)
// profile Page Route
router.get("/:userId/channel", videoController.getAllVideoByUserID)
// Delete A Specific Video 
router.delete("/video/:videoId", auth,  videoController.deleteVideo )
// Edit Video Page 
router.put("/editVideo/:editVideoId", auth, videoController.updateVideo); 


module.exports = router;