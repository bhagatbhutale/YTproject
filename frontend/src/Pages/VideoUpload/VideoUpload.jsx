import "./VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// react-toastify imported here
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
// circular Progress Before loading uploaded the videos and img
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const VideoUpload = () => {
  // videoupload form handle
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });

  // loder state
  const [loader, setLoader] = useState(false);

  const handleOnChangeInputField = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

  // upload thumbnail img using cloudnary
  const uploadImage = async (e, type) => {
    setLoader(true);
    console.log("Uploading");

    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "youtube-clone");

    try {
      const response = await axios.post(
        // cloudinary = dfmpevmcj
        `https://api.cloudinary.com/v1_1/dfmpevmcj/${type}/upload`,
        data
      );
      const url = response.data.secure_url;
      setLoader(false);
      let val = type === "image" ? "thumbnail" : "videoLink";

      setInputField({
        ...inputField,
        [val]: url,
      });
    } catch (err) {
      setLoader(false);
      console.error("Upload failed:", err.response?.data || err.message);
    }
  };

  console.log(inputField);

  // -----------------------------------------------------Backend Here
  // User is Logged in then Show a Upload Video Option
  const navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("userId");
    if (isLogin === null) {
      navigate("/");
    }
  }, []);

  const handleSubmitFunc = async (req, res) => {
    setLoader(true)
    await axios
      .post("http://localhost:7001/api/video", inputField, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoader(false)
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      });
  };

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
            placeholder="Title of Video"
            className="uploadFormInput"
            value={inputField.title}
            onChange={(e) => {
              handleOnChangeInputField(e, "title");
            }}
          />
          <input
            type="text"
            placeholder="Description"
            className="uploadFormInput"
            value={inputField.description}
            onChange={(e) => {
              handleOnChangeInputField(e, "description");
            }}
          />
          <input
            type="text"
            placeholder="Video Category ex. Coding, Learning, Music"
            className="uploadFormInput"
            value={inputField.videoType}
            onChange={(e) => {
              handleOnChangeInputField(e, "videoType");
            }}
          />
          <div>
            Thumbnail
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e, "image")}
              className="file-input file-input-file"
            />
          </div>
          <div>
            Video
            <input
              type="file"
              accept="video/mp4, video/webm, video/*"
              onChange={(e) => uploadImage(e, "video")}
            />
          </div>
          {/* // loader  */}
          {loader && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>

        {/* // Btns upload and home  */}
        <div className="uploadBtns">
          <div className="uploadBtn-form" onClick={handleSubmitFunc}>
            Upload
          </div>
          <Link to={"/"} className="uploadBtn-form">
            Home
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VideoUpload;
