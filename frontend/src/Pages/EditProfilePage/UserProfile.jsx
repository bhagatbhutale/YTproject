import axios from "axios";
import { useParams } from "react-router-dom";
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

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2>Edit Profile</h2>
        <input
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
      </div>
    </div>
  );
};

export default UserProfile;
