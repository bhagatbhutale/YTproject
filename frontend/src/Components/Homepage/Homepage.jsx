import "./Homepage.css";
import { Link } from "react-router-dom";
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
    "World wide Videos",
  ];

  return (
    <div className={sideNavbar ? `homepage` : "fullhomepage"}>
      {/* // Videos Categorys  */}
      <div className="homepage-options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homepage-option">
              {item}
            </div>
          );
        })}
      </div>

      {/* // main Page Center  */}
      <div
        className={sideNavbar ? `home-mainPage` : "home-mainPagewithoutSidebar"}
      >
        <Link to={"/watch/1"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://static.vecteezy.com/system/resources/thumbnails/049/201/489/small_2x/colorful-birds-perched-on-a-branch-in-a-lush-green-forest-during-daylight-photo.jpeg"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </Link>

        <Link to={"/watch/2"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/074/253/small_2x/tropical-forest-sunset-nature-background-with-coconut-trees-vector.jpg"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </Link>

        <Link to={"/watch/3"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-vlog-youtube-thumbnail-design-template-4c932c9f4219cde8a75bb91eeb6a927e_screen.jpg?ts=1570804655"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </Link>

        <Link to={"/watch/4"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lFwfjNfhHHcc6eRDRib3xhvM6nfvOKTqeA&s"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </Link>

        <Link to={"/watch/5"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/29689/optimized_product_thumb_893-youtube-thumbnail-maker-tech-alt-11__1_.jpg"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </Link>

        <div to={"/watch/6"} className="youtube-Videos">
          <div className="thubmnailBox">
            <img
              className="youtube-thumbnailPic"
              src="https://i.pinimg.com/originals/fe/b0/f0/feb0f0131f58d45b0f6f348c984fffca.png"
              alt="thumbnail"
            />
            <div className="youtube-timingThumbnail">15:40</div>
          </div>

          <div className="youtube-TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                className="youtube-thumbnail-Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUFgfLaMxe8ECrFldr60oy5JNEguRZOdFLQ&s"
                alt="Profile"
              />
            </div>
            <div className="youtubeTitleBox-Title">
              <div className="youtube-videoTitle">TMKOC</div>
              <div className="youtube-channeName">Sony</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
