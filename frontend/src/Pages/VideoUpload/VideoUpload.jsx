

import "./VideoUpload.css"
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom"
const VideoUpload = () => {
  return (
    <div className="videoUpload">
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>

        <div className="uploadForm">
          <input
            type="text"
            placeholder="Type of Video"
            className="uploadFormInput"
          />
          <input
            type="text"
            placeholder="Type of Video"
            className="uploadFormInput"
          />
          <input
            type="text"
            placeholder="Type of Video"
            className="uploadFormInput"
          />
          <div>
            Thumbnail <input type="file" accept="image/*" />{" "}
          </div>
          <div>
            {" "}
            Video <input
              type="file"
              accept="video/mp4, video/webm, video/*"
            />{" "}
          </div>
        </div>

{/* // Btns upload and home  */}
        <div className="uploadBtns">
          <div className="uploadBtn-form">Upload</div>
          <Link to={"/"} className="uploadBtn-form">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default VideoUpload
