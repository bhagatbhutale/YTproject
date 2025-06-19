import "./Homepage.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Redux/categorySlice";
const Homepage = ({ sideNavbar }) => {

  // Search a Video by title
  const searchTerm = useSelector((state) => state.search.term)
  // based on Category videos
  const selectedCategory = useSelector((state) => state.category.selectedCategory)
  const dispatch = useDispatch()

  const options = ["All", "Coding", "Learning", "Music", "Movies", "etc"];

  // all Videos Fetching from Backend ----
  const [ data, setData ] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:7001/api/allVideo")
      .then((res) => {
        console.log(res.data.videos)
        setData(res.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // Searching Function 
  const filteredVideos = data.filter((item) =>{ 
    const videoSearchByTitle = item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const videoCategoryWIseSearch = selectedCategory === "All" || item.videoType === selectedCategory;
    return videoSearchByTitle && videoCategoryWIseSearch
})


  return (
    <div className={sideNavbar ? `homepage` : "fullhomepage"}>
      {/* // Videos Categorys  */}
      <div className="homepage-options">
        {options.map((item, index) => {
          return (
            <div key={index}
             className={`homepage-option ${selectedCategory === item ? "active" : ""}`}
             onClick={() => dispatch(setCategory(item))}
             >
              {item}
            </div>
          );
        })}
      </div>

      {/* // main Page Center  */}
      <div
        className={sideNavbar ? `home-mainPage` : "home-mainPagewithoutSidebar"}
      >
        {filteredVideos.map((item, index) => {
          return (
            <Link to={`/watch/${item._id}`} className="youtube-Videos">
              <div className="thubmnailBox">
                <img
                  className="youtube-thumbnailPic"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
              </div>

              <div className="youtube-TitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img
                    className="youtube-thumbnail-Profile"
                    src={item?.user?.profilePic}
                    alt="Profile"
                  />
                </div>
                <div className="youtubeTitleBox-Title">
                  <div className="youtube-videoTitle">{item?.title}</div>
                  <div className="youtube-channeName">
                    {item?.user?.channelName}
                  </div>
                  <div className="youtubeVideo-views"> {item?.like}</div>
                </div>
              </div>
            </Link>
          );
        })}





{/* // Commented Code used in Future  */}
        {/* ----------------------------------------------------------------------------     */}
        {/* <Link to={"/watch/2"} className="youtube-Videos">
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
        </Link> */}

        {/* ----------------------------------------------------------------------------     */}

      </div>
    </div>
  );
};

export default Homepage;
