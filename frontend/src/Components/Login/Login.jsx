
import { useState } from "react";
import "./Login.css"
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from "axios";
// react-toastify imported here
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
// materiaal UI Loader used imported Here
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Login = ({ setLoginModel }) => {


  // Login form handle
  const [loginField, setLoginField] = useState({"userName":"", "password":""});
  console.log(loginField);

  const handleOnChangeInput = ( event, name) => {
    setLoginField({ 
      ...loginField,[name]:event.target.value
     })
  }

  const [loader, setLoader] = useState(false);

  // Backend Api Inteergition is Here ---------------------
  const handleLoginFunc = async (req, res) => {
    setLoader(true)
    await axios.post("http://localhost:7001/auth/login", loginField).then((res) => {
    
      setLoader(false)
      // data store in LocalStorage
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.user._id)
      localStorage.setItem("userProfilePic", res.data.user.profilePic)
      window.location.reload()

    }).catch(err => {
      toast.error("Invalid Credentials !");
      console.log(err)
      setLoader(false)
    })
  }

  // -----------------------------------------

  return (
    <div className="login">
      <div className="login-Card">
        <div className="titleCard-login">
          <YouTubeIcon
            sx={{ fontSize: "54px", color: "red" }}
            className="login-YoutubeImage"
          />
          Login
        </div>
        <div className="loginCredientials">
          <div className="userName-Login">
            <input
              type="text"
              className="userNameLogin-username"
              placeholder="UserName"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, "userName")}
            />
          </div>
          <div className="userName-Login">
            <input
              type="password"
              className="userNameLogin-username"
              placeholder="Password"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, "password")}
            />
          </div>
        </div>
        <div className="login-Btns">
          <div className="login-btn" onClick={handleLoginFunc}>
            Login
          </div>
          <Link
            to={"/signup"}
            onClick={() => setLoginModel()}
            className="login-btn"
          >
            SignUp
          </Link>
          <div className="login-btn" onClick={() => setLoginModel()}>
            Cancle
          </div>
        </div>

        {/* // loader  */}
        { loader && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login
