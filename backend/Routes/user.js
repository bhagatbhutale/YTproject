const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user.controller.js")

// Routes 

//signUp
router.post("/signup", UserController.signUp)
//signIn
router.post("/login", UserController.signIn)
//logout
router.post("/logout", UserController.logout);


module.exports = router;