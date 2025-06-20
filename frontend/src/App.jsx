import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { useState , useEffect} from "react"
import { Route, Routes,  } from "react-router-dom";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import SignUp from "./Pages/SignUp/SignUp";
import axios from "axios"
import UserProfile from "./Pages/EditProfilePage/UserProfile";

const App = () => {
  const [ sideNavbar , setSideNavbar ] = useState(true);

  // backend Data Comming or Not Checking ------
  // useEffect(() => {
  //   axios.get("http://localhost:7001/api/allVideo").then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])
  // -------------------------------------
  
  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} />
        <Route path="/:id/upload" element={<VideoUpload />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="user/:userId/updateprofile" element={ <UserProfile />  }  />
      </Routes>
    </div>
  );
}

export default App
