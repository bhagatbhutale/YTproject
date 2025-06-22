import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import Sidenavbar from "../../Components/SideNavbar/SideNavbar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import UserProfile from "../EditProfilePage/UserProfile";
import axios from "axios";
// material ui button used 
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Profile.css";
// Profile Page
const Profile = ({ sideNavbar }) => {

  const navigate = useNavigate()

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


  const handleEditProfile = async () => {
    navigate(`/user/${id}/updateprofile`)
  }

  // Delete a Video Backend Delete APi
  const  handleDelete = async (videoId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      await axios.delete(`http://localhost:7001/api/video/${videoId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted video from the local state
      setData((prev) => prev.filter((video) => video._id !== videoId));
      alert("Video deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
      alert("Failed to delete video.");
    }
  };
  


  return (
    <div className="profile">
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? `profilePage` : "profilePage-inactive"}>
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-Background-Banner"
            className="profile-Background-Banner"
          />
        </div>
        {/* // profile top section  */}
        <div className="profile-TopSection">
          <div className="profile-TopSection-Profile">
            <img
              src={user?.profilePic}
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

            <div className="profile-edit-btns">
              <button className="subscribe-btn" variant="outlined">
                Subscribe
              </button>
              <div className="custimize-channel-btn" >
                <Stack spacing={2} direction="row">
                  <Button variant="outlined" onClick={handleEditProfile} >Custmize Channel</Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>

        {/* // video section  */}
        <div className="profileVideos">
          <div className="profile-video-Title">
            Videos &nbsp; <ArrowRightIcon />
          </div>

          <div className="profileee-Videos">
            {/* // video for a div  */}
            {data.map((item, key) => {
              return (
                <div key={item._id} className="profileVideo-Block">
                  <Link to={`/watch/${item._id}`}>
                    <div className="profileVideo-block-thumbnail">
                      <img
                        className="profileVideo-block-thumbanai-img"
                        src={item?.thumbnail}
                        alt="videos"
                      />
                    </div>
                    <div className="profileVideo-Block-details">
                      <div className="profileVideo-Block-details-name">
                        {item?.title}
                      </div>
                      <div className="profileVideo-Block-details-about">
                        Create at {item?.createdAt.slice(0, 10)}
                      </div>
                    </div>
                  </Link>
                  {/* delete video button  */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="videoDelete-btn"
                  >
                    <DeleteIcon sx={{ fontSize:"20px" }} />
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
