import "./SideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar ? "home-SideNavbar" : "homeSidebarHide"}>
      <div className="home-sideNavbar-Top">
        <div className={`home-sideNavbarTopOption`}>
          <HomeIcon />
          <div className="home-sideNavbarTopOptionTitle">Home</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <VideocamIcon />
          <div className="home-sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SubscriptionsIcon />
          <div className="home-sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      {/* // middle  */}

      <div className="home-sideNavbar-Middle">
        <div className={`home-sideNavbarTopOption`}>
          You
          <div className="home-sideNavbarTopOptionTitle">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <AccountCircleIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Channel</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <HistoryIcon />
          <div className="home-sideNavbarTopOptionTitle">History</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <PlaylistAddIcon />
          <div className="home-sideNavbarTopOptionTitle">Playlist</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <SmartDisplayIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Videos</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <WatchLaterIcon />
          <div className="home-sideNavbarTopOptionTitle">Watch Laters</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <ThumbUpIcon />
          <div className="home-sideNavbarTopOptionTitle">Likes Videos</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <ContentCutIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Clips</div>
        </div>
      </div>

      {/* // End  */}
      <div className="home-sideNavbar-end">
        <div className="home-sideNavbarTopOption">
          <div className="home-sideNavbarTopOptionTitleHeader">
            Subscription
          </div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <img
            className="home-sidebar-imgLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&sz"
            alt=""
          />
          <div className="home-sideNavbarTopOptionTitle">Sony Live</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <img
            className="home-sidebar-imgLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUpCbLJWRBcRWcVSdkj81pRTnQ1rHbwXZyQ&s"
            alt=""
          />
          <div className="home-sideNavbarTopOptionTitle">Star Pravah</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <img
            className="home-sidebar-imgLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Colors_Cineplex_Black.png"
            alt=""
          />
          <div className="home-sideNavbarTopOptionTitle">Colours Cineplex</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <img
            className="home-sidebar-imgLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUpCbLJWRBcRWcVSdkj81pRTnQ1rHbwXZyQ&s"
            alt=""
          />
          <div className="home-sideNavbarTopOptionTitle">Star Pravah</div>
        </div>
        <div className={`home-sideNavbarTopOption`}>
          <img
            className="home-sidebar-imgLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUpCbLJWRBcRWcVSdkj81pRTnQ1rHbwXZyQ&s"
            alt=""
          />
          <div className="home-sideNavbarTopOptionTitle">Star Pravah</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
