
import { useState } from "react";
import "./Login.css"
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
const Login = ({ setLoginModel }) => {


  // Login form handle
  const [loginField, setLoginField] = useState({"userName":"", "password":""});
  console.log(loginField);

  const handleOnChangeInput = ( event, name) => {
    setLoginField({ 
      ...loginField,[name]:event.target.value
     })
  }

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
          <div className="login-btn">Login</div>
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
      </div>
    </div>
  );
};

export default Login
