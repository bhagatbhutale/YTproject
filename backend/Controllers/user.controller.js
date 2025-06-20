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
        token,
        user
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




// / PUT /api/user/:userId - Update user profile by ID (requires auth) 
exports.updateChannelNameAndAbout =  async (req, res) => {
  try {
    const { userId } = req.params;
    const { channelName, about, profilePic } = req.body;

    // Only allow user to update their own profile
    if (req.user._id.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { channelName, about, profilePic },
      { new: true, runValidators: true }
    );

    res.json({ message: "Profile updated", updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};