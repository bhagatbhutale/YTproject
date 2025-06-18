
import Homepage from "../../Components/Homepage/Homepage"
import Notlogin from "../../Components/NotLogin/Notlogin"
import SideNavbar from "../../Components/SideNavbar/SideNavbar"
import "./Home.css"
import { useState, useEffect } from "react"
const Home = ({sideNavbar}) => {
  
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    // Backend Api fetching ------------------------------------------
    useEffect(() => {
      setIsLoggedIn(localStorage.getItem("userId") !== null? true: false );
    }, []) 

  return (
    <div className="home">
      <SideNavbar sideNavbar={sideNavbar} />
      {!isLoggedIn ? <Notlogin /> : <Homepage sideNavbar={sideNavbar} />}
    </div>
  );
}

export default Home
