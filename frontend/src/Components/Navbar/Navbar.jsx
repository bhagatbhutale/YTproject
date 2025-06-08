import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {

    const [userPic, setUserPic] = useState(
      "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
    );

    const [ navbarModel, setNavbarModel ] = useState(false);

    const handleClickModel = () => {
        setNavbarModel(!navbarModel);
    }

  return (
    <div className="navbar">
      {/* // navbar-left  */}
      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <div className="navbar_youtubeimg">
          <YouTubeIcon sx={{ color: "red", fontSize: "34px" }} />
          <div className="navbar_youtubeTitle">YouTube</div>
        </div>
      </div>

      {/* // navbar-center  */}

      <div className="navbar-middle">
        <div className="navbar-searchbar">
          <input
            className="nav-search-input"
            type="text"
            placeholder="search here ..."
          />
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <div className="navbar-Mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* // navbar-right  */}
      <div className="navbar-right">
        <div className="navbar-videoCall">
          <VideoCallIcon
            sx={{ color: "white", fontSize: "28px", cursor: "pointer" }}
          />
        </div>
        <div className="navbar-notification">
          <NotificationsIcon
            sx={{ color: "white", fontSize: "28px", cursor: "pointer" }}
          />
        </div>
        {/* <div className="navbar-person">
                <PersonIcon sx={{ color: "white", fontSize: "28px" , cursor: "pointer" }} />
            </div> */}
        <img
          className="navbar-right-logo"
          src={userPic}
          width={`30px`}
          height={"30px"}
          onClick={handleClickModel}
        />
        { navbarModel &&
          <div className="navbar-model">
            <div className="navbar-model-option">Profile</div>
            <div className="navbar-model-option">Logout</div>
            <div className="navbar-model-option">Login</div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
