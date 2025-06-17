import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import Sidenavbar from "../../Components/SideNavbar/SideNavbar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import axios from "axios";

import "./Profile.css";
// Profile Page
const Profile = ({ sideNavbar }) => {
  const { id } = useParams();
  // profile page fetching from backend
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const fetchProfileData = async (req, res) => {
    await axios
      .get(`http://localhost:7001/api/${id}/channel`)
      .then((response) => {
        console.log(response);
        setData(response.data.video);
        setUser(response.data.video[0]?.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  // ---------------------------------------------------------------------

  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? `profilePage` : "profilePage-inactive"}>
        {/* // profile top section  */}
        <div className="profile-TopSection">
          <div className="profile-TopSection-Profile">
            <img
              src={ user?.profilePic }
              alt="UserProfileimage"
              className="profile-top-section-img"
            />
          </div>
          <div className="profileTop-Section-About">
            <div className="profileTop-SectionAbout-Name">
              {user?.channelName}
            </div>
            <div className="profileTop-Section-Info">
              {user?.userName} . {data.length} Videos
            </div>
            <div className="profileTop-Section-Info">{user?.about}</div>
          </div>
        </div>

        <div className="profileVideos">
          <div className="profile-video-Title">
            Videos &nbsp; <ArrowRightIcon />
          </div>

          <div className="profileee-Videos">
            {/* // video for a div  */}

            {data.map((item, key) => {
              return (
                <Link to={`/watch/${item._id}`} className="profileVideo-Block">
                  <div className="profileVideo-block-thumbnail">
                    <img
                      className="profileVideo-block-thumbanai-img"
                      src={item?.thumbnail}
                      alt="videos"
                    />
                  </div>
                  <div className="profileVideo-Block-details">
                    <div className="profileVideo-Block-details-name">
                      { item?.title }
                    </div>
                    <div className="profileVideo-Block-details-about">
                      Create at { item?.createdAt.slice(0, 10) }
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
