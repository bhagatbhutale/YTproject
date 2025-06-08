
import Homepage from "../../Components/Homepage/Homepage"
import SideNavbar from "../../Components/SideNavbar/SideNavbar"
import "./Home.css"
const Home = ({sideNavbar}) => {
  return (
    <div className="home" >
    <SideNavbar sideNavbar={sideNavbar} />
    <Homepage />
    </div>
  )
}

export default Home
