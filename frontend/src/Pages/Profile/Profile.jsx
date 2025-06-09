import { Link } from "react-router-dom"
import SideNavbar from "../../Components/SideNavbar/SideNavbar"
import Sidenavbar from "../../Components/SideNavbar/SideNavbar"
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./Profile.css"
// Profile Page
const Profile = ({sideNavbar}) => {
  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? `profilePage` : "profilePage-inactive"}>
        {/* // profile top section  */}
        <div className="profile-TopSection">
          <div className="profile-TopSection-Profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt="profileimage"
              className="profile-top-section-img"
            />
          </div>
          <div className="profileTop-Section-About">
            <div className="profileTop-SectionAbout-Name">TheCodingExpress</div>
            <div className="profileTop-Section-Info">@User1 4 Videos</div>
            <div className="profileTop-Section-Info">About section of User</div>
          </div>
        </div>

        <div className="profileVideos">
          <div className="profile-video-Title">
            Videos &nbsp; <ArrowRightIcon />
          </div>

          <div className="profileee-Videos">
            {/* // video for a div  */}
            <Link to={"/watch/1"} className="profileVideo-Block">
              <div className="profileVideo-block-thumbnail">
                <img
                  className="profileVideo-block-thumbanai-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4bhrAkVfa76OBXZ3B4By_N2L0B-kdbZ89Q&s"
                  alt=""
                />
              </div>
              <div className="profileVideo-Block-details">
                <div className="profileVideo-Block-details-name">
                  Video Title
                </div>
                <div className="profileVideo-Block-details-about">
                  Create at 2025-05-14
                </div>
              </div>
            </Link>
            <Link to={"/watch/2"} className="profileVideo-Block">
              <div className="profileVideo-block-thumbnail">
                <img
                  className="profileVideo-block-thumbanai-img"
                  src="https://i.pinimg.com/736x/cc/0c/85/cc0c850a792afd4825cb05e1b9ea37d3.jpg"
                  alt=""
                />
              </div>
              <div className="profileVideo-Block-details">
                <div className="profileVideo-Block-details-name">
                  Video Title
                </div>
                <div className="profileVideo-Block-details-about">
                  Create at 2025-05-14
                </div>
              </div>
            </Link>
            <Link to={"/watch/3"} className="profileVideo-Block">
              <div className="profileVideo-block-thumbnail">
                <img
                  className="profileVideo-block-thumbanai-img"
                  src="https://i.pinimg.com/736x/87/79/97/87799709ad434ca38c9d84a4c2b1af7b.jpg"
                  alt=""
                />
              </div>
              <div className="profileVideo-Block-details">
                <div className="profileVideo-Block-details-name">
                  Video Title
                </div>
                <div className="profileVideo-Block-details-about">
                  Create at 2025-05-14
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
