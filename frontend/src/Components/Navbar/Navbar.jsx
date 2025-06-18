import { useState , useEffect} from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Link , useNavigate} from "react-router-dom";
// react-toastify imported here
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Login from "../Login/Login";
import axios from "axios";
// redux used for Search Functionality
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../../Redux/searchSlice"

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {

  // search videos by title using redux 
  const dispatch = useDispatch()

  const [userPic, setUserPic] = useState(
    "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  );

  // profilePage Nevigate
  const nevigate = useNavigate();

  const handleProfile = () => {
    // after clicking th eProfilePic then Render 
    let userId = localStorage.getItem("userId")

    nevigate(`/user/${userId}`)
    setNavbarModel(false)
  }

  const [navbarModel, setNavbarModel] = useState(false);
  const [ login , setLogin ] = useState(false);

  const handleClickModel = () => {
    setNavbarModel(!navbarModel);
  };

  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar)
  };

  // login , logout  with Fetching Logout Api 
  const onClickOfPopUpOption = (button) => {
    setNavbarModel(false)
  if(button == "login") {
    setLogin(true);
  } else {
    // Logout user

    localStorage.clear();
    getLogoutFunc()
    setTimeout(() => {
      nevigate("/")
      window.location.reload()
    }, 2000)
  }
  }
// logout function
  const getLogoutFunc = async() => {
    axios.post("http://localhost:7001/auth/logout", {}, { withCredentials: true }).then((res) => {
      toast.success("You are Logout")
      console.log("Logout")
    }).catch(err => {
      console.log(err);
    })
  }

  //login model close after clicking the Cancle btn
  const setLoginModel = () => {
    setLogin(false)
  }



  // in Navbar ProfilePicture fetching based on user SignUp 
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  // Backend Api fetching ------------------------------------------
  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLoggedIn(localStorage.getItem("userId") !== null? true: false );
    if(userProfilePic !== null) {
      setUserPic(userProfilePic)
    }
  }, []) 



  return (
    <div className="navbar">
      {/* // navbar-left  */}
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "black" }} />
        </div>

        <Link to="/" className="navbar_youtubeimg">
          <YouTubeIcon sx={{ color: "red", fontSize: "34px" }} />
          <div className="navbar_youtubeTitle">YouTube</div>
        </Link>
      </div>

      {/* // navbar-center  */}

      <div className="navbar-middle">
        <div className="navbar-searchbar">
          <input
            className="nav-search-input"
            type="text"
            placeholder="search here ..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value)) }
          />
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{ color: "black", fontSize: "28px" }} />
          </div>
        </div>
        <div className="navbar-Mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* // navbar-right  */}
      <div className="navbar-right">
        <Link to={"/22/upload"} className="navbar-videoCall">
          <VideoCallIcon
            sx={{ color: "black", fontSize: "28px", cursor: "pointer" }}
          />
        </Link>
        <div className="navbar-notification">
          <NotificationsIcon
            sx={{ color: "black", fontSize: "28px", cursor: "pointer" }}
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

        {navbarModel && (
          <div className="navbar-model">
            {/* // user is Logged in Then See a ProfileSection  */}
            {isLoggedIn && (
              <div className="navbar-model-option" onClick={handleProfile}>
                Profile
              </div>
            )}

            {isLoggedIn && (
              <div
                className="navbar-model-option"
                onClick={() => onClickOfPopUpOption("logout")}
              >
                Logout
              </div>
            )}

            {!isLoggedIn && (
              <div
                className="navbar-model-option"
                onClick={() => onClickOfPopUpOption("login")}
              >
                Login
              </div>
            )}
          </div>
        )}
      </div>

      {login && <Login setLoginModel={setLoginModel} />}
    </div>
  );
};

export default Navbar;
