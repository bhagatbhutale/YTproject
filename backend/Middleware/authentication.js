const jwt = require("jsonwebtoken");
const User = require("../Models/user");

// authentication JWT used

const auth = async (req, res, next) => {
  // check token present or not for user
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({
      error: "No token, authorization is Denied",
    });
  } else {
    try {
      const decode = jwt.verify(token, "Its_My_Secret_Key");
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (err) {
      res.status(401).send({
        error: "Token is Not Valid !",
      });
    }
  }
};

module.exports = auth