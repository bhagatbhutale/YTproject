import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./UserProfile.css"
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

    const navigate = useNavigate()

  const { userId } = useParams(); // userId from URL
  const [channelName, setChannelName] = useState("");
  const [about, setAbout] = useState("");

  const handleUpdate = async () => {
    try {

        if(channelName === "") {
            alert("ChannelName is Required !")
        }

      const token = localStorage.getItem("token");

      if(token) {
        await axios.put(
          `http://localhost:7001/auth/${userId}/profileUpdate`,
          { channelName, about },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      alert("Profile updated successfully !");
      navigate(`/user/${userId}`)

    //   localStorage.setItem("profilePic")
      console.log(data.user);
    } catch (err) {
      console.error(
        "Error updating profile:",
        err.response?.data || err.message
      );
    }
  };

  const handleExit = () => {
    navigate(-1)
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2>Update Profile</h2>
        <input
          required
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <textarea
          placeholder="About"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <button onClick={handleUpdate}>Update</button>
        
          <button onClick={handleExit} > Go to Profile </button>
    
      </div>
    </div>
  );
};

export default UserProfile;
