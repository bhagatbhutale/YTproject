import "./Homepage.css";
const Homepage = ({ sideNavbar }) => {
  const options = [
    "All",
    "Music",
    "Mixes",
    "Marathi Serial",
    "New for You",
    "TMKOC",
    "All Movies",
    "Marathi Movies",
    "Tech Videos",
    "Videos",
    "Gamming",
    "Cricket",
    "Debates",
    "T-series",
    "Jalraj",
    "Vlogs",
    "Travels",
    "News",
    "Village Vlogs",
    "World wide Videos"
  ];

  return (
    <div className={sideNavbar ? `homepage` : "fullhomepage"}>


{/* // Videos Categorys  */}
      <div className="homepage-options">
        {options.map((item, index) => {
          return <div key={index} className="homepage-option">{item}</div>;
        })}
      </div>

{/* // main Page Center  */}
      <div className="home-mainPage">

      </div>

    </div>
  );
};

export default Homepage;
