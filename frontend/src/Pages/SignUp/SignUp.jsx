import "./SignUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// react-toastify imported here
import { toast, ToastContainer } from "react-toastify";
// materiaal UI Loader used imported Here
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const SignUp = () => {
  // img State
  const [uploadImageUrl, setUploadedImageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
  );


  // progress bar 
  const [ progressBar, setProgressBar ] = useState(false)
  const nevigate = useNavigate()


  // signUp pageform handle
  const [signUpField, setSignUpField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: uploadImageUrl,
  });

  const handleInputField = (event, name) => {
    setSignUpField({
      ...signUpField,
      [name]: event.target.value,
    });
  };

  // image upload using Cloudinary
  const uploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "youtube-clone"); // Cloudinary

    try {
      setProgressBar(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfmpevmcj/image/upload",
        data
      );
      setProgressBar(false);
      const imageUrl = response.data.secure_url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
        ...signUpField,
        profilePic: imageUrl,
      });
    } catch (err) {
      console.error("Upload failed:", err.response?.data || err.message);
    }
  };

  // Backend SignUp user Post in DataBase
  const handleSignUp = async (req, res) => {
    setProgressBar(true)
    axios
      .post("http://localhost:7001/auth/signup", signUpField)
      .then((res) => {
        toast.success(res.data.message);
        setProgressBar(false);
        nevigate("/")
      })
      .catch((err) => {
        setProgressBar(false);
        toast.error(err);

      });
  };

  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-title">
          <YouTubeIcon
            sx={{ fontSize: "54px", color: "red" }}
            className="login-YoutubeImage"
          />
          SignUp
        </div>

        <div className="signUp-Inputes">
          <input
            type="text"
            className="signUp-input-inp"
            placeholder="Channel Name"
            value={signUpField.channelName}
            onChange={(e) => {
              handleInputField(e, "channelName");
            }}
          />
          <input
            type="text"
            className="signUp-input-inp"
            placeholder="UserName"
            value={signUpField.userName}
            onChange={(e) => {
              handleInputField(e, "userName");
            }}
          />
          <input
            type="password"
            className="signUp-input-inp"
            placeholder="Password"
            value={signUpField.password}
            onChange={(e) => {
              handleInputField(e, "password");
            }}
          />
          <input
            type="text"
            className="signUp-input-inp"
            placeholder="About Your Channel"
            value={signUpField.about}
            onChange={(e) => {
              handleInputField(e, "about");
            }}
          />

          <div className="image-upload-Signup">
            <input type="file" onChange={(e) => uploadImage(e)} />
            <div className="image-upload-signp-div">
              <img
                className="image-default-signup"
                alt="profile-logo-img"
                src={uploadImageUrl}
              />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn" onClick={handleSignUp}>
              SignUp
            </div>
            <Link to={"/"} className="signUpBtn">
              HomePage
            </Link>
          </div>

          {progressBar && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
