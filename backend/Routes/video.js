const express = require("express");
const router = express.Router();
const videoController = require("../Controllers/video.controller")

// check user login or Not user is Login then upload a Video
const auth = require("../Middleware/authentication")

// Video Routes
router.post("/video", auth , videoController.uploadVideo)
// all Videos
router.get("/allVideo", videoController.getAllVideo);
// specific video watch (get)
router.get("/getVideoById/:id", videoController.getVideoById)
// profile Page Route
router.get("/:userId/channel", videoController.getAllVideoByUserID)


module.exports = router;