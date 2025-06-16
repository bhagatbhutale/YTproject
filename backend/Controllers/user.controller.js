const User = require("../Models/user");
// bcrypt imported here
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const cookieOptions = {
    httpOnly : true,
    secure: false, // Set to True in production
    sameSite: "Lax"

}

// SignUp Path
exports.signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;

    // check user exist or not
    const isExist = await User.findOne({ userName });
    if (isExist) {
      res.status(400).send({
        error: "Username Already Exist please try with other username",
      });
    } else {
      let updatedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        channelName,
        userName,
        about,
        profilePic,
        password: updatedPassword,
      });
      await user.save();
      res.status(201).send({
        message: "User Registred Successfully !",
      });
    }
  } catch (err) {
    res.status(500).send({ error: "Server Error" });
  }
};

// SignIn Path

exports.signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    // check user Present or not
    const user = await User.findOne({ userName });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          userId: user._id,
        },
        "Its_My_Secret_Key",
      );
      // cookie in saved userId
      res.cookie("token", token, cookieOptions);


      res.send({
        message: "Logged in Successfully",
        success: true,
        token
      });
    } else {
      res.status(400).send({
        error: " Invalid Crendiatials",
      });
    }
  } catch (err) {
    res.status(500).send({ error: "Server Error" });
  }
};



// Logout
exports.logout = async (req, res) => {
    res.clearCookie("token", cookieOptions).send({
        message: "Logged out Successfully"
    })
}