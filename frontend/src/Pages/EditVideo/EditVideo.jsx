import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditVideo.css"
const EditVideo = () => {
    const { editVideoId } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "All",
  });

//   useEffect(() => {
//     // Fetch existing video details
//     const fetchVideo = async () => {
//       const { data } = await axios.get(
//         `http://localhost:7001/videoApi/video/${id}`
//       );
//       setVideo(data.video);
//     };
//     fetchVideo();
//   }, [id]);

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  // Video Edit Backend Api
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:7001/api/editVideo/${editVideoId}`,
        video,
        {
            withCredentials:true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Video updated successfully");
      navigate(-1);
    } catch (err) {
      alert("Update failed");
      console.error("Error updating video:", err.response?.data || err.message);
    }
  };

  // Go Back to Page 
  const  handleBacktoPage = () => {
    navigate(-1)
  }

  return (
    <div className="edit-video-container">
      <div className="edit-video-card">
        <h2 className="edit-video-title">Edit Video</h2>

        <input
          className="edit-video-input"
          type="text"
          name="title"
          value={video.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          className="edit-video-textarea"
          name="description"
          value={video.description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <input
          className="edit-video-input"
          type="text"
          name="videoLink"
          value={video.videoLink}
          onChange={handleChange}
          placeholder="Video URL"
        />
        <input
          className="edit-video-input"
          type="text"
          name="thumbnail"
          value={video.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
        />
        <select
          className="edit-video-select"
          name="videoType"
          value={video.videoType}
          onChange={handleChange}
        >
          <option value="All">Music</option>
          <option value="short">Learning</option>
          <option value="full">Movies</option>
          <option value="full">Coding</option>
        </select>

        <button className="edit-video-btn" onClick={handleUpdate}>
          Update Video
        </button>
        <button onClick={handleBacktoPage} className="edit-video-btn">
          Go Back to Page
        </button>
      </div>
    </div>
  );
};

export default EditVideo;
