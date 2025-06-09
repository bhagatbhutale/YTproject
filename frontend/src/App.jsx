import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { useState } from "react"
import { Route, Routes,  } from "react-router-dom";
import Video from "./Pages/Video/Video";

const App = () => {

  const [ sideNavbar , setSideNavbar ] = useState(true);
  
  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={ <Video /> } />
      </Routes>
    </div>
  );
}

export default App
