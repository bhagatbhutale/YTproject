import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { useState } from "react"
const App = () => {

  const [ sideNavbar , setSideNavbar ] = useState(true);
  
  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar}  />
    </div>
  );
}

export default App
