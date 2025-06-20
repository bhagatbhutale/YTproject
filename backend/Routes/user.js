const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user.controller.js")
const auth = require("../Middleware/authentication.js")

// Routes 

//signUp
router.post("/signup", UserController.signUp)
//signIn
router.post("/login", UserController.signIn)
//logout
router.post("/logout", UserController.logout);
// update channelPage and About 
router.put("/:userId/profileUpdate", auth, UserController.updateChannelNameAndAbout)


module.exports = router;