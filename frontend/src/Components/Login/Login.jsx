
import "./Login.css"
import YouTubeIcon from "@mui/icons-material/YouTube";
const Login = ({ setLoginModel }) => {
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
              placeholder="Username"
            />
          </div>
          <div className="userName-Login">
            <input
              type="password"
              className="userNameLogin-username"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="login-Btns">
          <div className="login-btn">Login</div>
          <div className="login-btn">SignUp</div>
          <div className="login-btn" onClick={() => setLoginModel()} >Cancle</div>
        </div>
      </div>
    </div>
  );
};

export default Login
