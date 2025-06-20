import "./Video.css";
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// react-toastify imported here
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
// Video Page
const Video = () => {
  // comment handle state
  const [message, setMessage] = useState("");

  // backend fetching
  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("")
  const { id } = useParams();

  // comment state
  const [ comments, setComments ] = useState([]);

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:7001/api/getVideoById/${id}`)
      .then((response) => {
        console.log(response.data.video);
        setData(response.data.video)
        setVideoUrl(response?.data?.video?.videoLink)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // comment fetching from Backend function 
  const getCommentByVideoId = async (req, ress) => {
    await axios
      .get(`http://localhost:7001/commentApi/comment/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.comments)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId()
  }, []);

  // Post Comment Handle Api  Backend
  const handleCommentFunc = async () => {
    const body = {
      "message": message,
      "video": id
    }
    await axios.post(
      "http://localhost:7001/commentApi/comment",
      body, 
      {withCredentials: true}
    ).then((res) => {
      console.log(res)
      const newComment = res.data.comment
      setComments([ newComment, ...comments ])
      setMessage("")
    }).catch(err => {
      toast.error("Please Login First")
    })
  }


  const currentUser = localStorage.getItem("userId");

// Delete Comment Api
  const handleDelete = async (commentId) => {
    alert("Conform to Delete Comment")
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:7001/commentApi/comment/${commentId}`, { withCredentials: true },{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };
  
  
  

 
  

  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video-youtube">
          {/* condictionally rendering video  */}
          {/* {data && (
            <video
              width="400"
              controls
              autoPlay
              className="video-youtube-video"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )} */}

          {data && (
            <iframe
              className="video-youtube-video"
              width="400"
              height="515"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>

        <div className="video-YoutubeAbout">
          <div className="video-youtubeTitle">{data?.title}</div>
          <div className="youtube-video-ProfileBlock">
            <div className="youtube-video-ProfileBlock-left">
              <Link
                to={`/user/${data?.user?._id}`}
                className="youtube-video-ProfileBlock-left-img"
              >
                <img
                  className="youtube-video-ProfileBlock-left-image"
                  src={data?.user?.profilePic}
                  alt=""
                />
              </Link>
              <div className="youtubeVideo-subView">
                <div className="youtubePostProfileName">
                  {data?.user?.channelName}
                </div>
                <div className="youtubePostProfileSubs">
                  {data?.user?.createdAt.slice(0, 10)}
                </div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtubeVideo-LikeBlock">
              <div className="youtubeVideo-likeBlock-Like">
                <ThumbUpOffAltIcon />
                <div className="youtube-video-likeBlock-NoOfLikes">
                  {data?.like}
                </div>
              </div>
              <div className="youtubeVideo-Divider"></div>
              <div className="youtubeVideo-likeBlock-Like">
                <ThumbDownOffAltIcon />
              </div>
            </div>

            <div className="youtubeVideo-LikeBlock">
              <div className="youtubeVideo-likeBlock-Like">
                <ShareIcon />
                <div className="youtube-video-likeBlock-NoOfLikes">Share</div>
              </div>
            </div>

            <div className="youtubeVideo-LikeBlock">
              <div className="youtubeVideo-likeBlock-Like">
                <DownloadIcon />
                <div className="youtube-video-likeBlock-NoOfLikes">
                  Download
                </div>
              </div>
            </div>
          </div>

          <div className="youtube-video-About">
            <div>{data?.createdAt.slice(0, 10)}</div>
            <div>{data?.description}</div>
          </div>

          <div className="youtubeComment-Section">
            <div className="youtubeComment-Section-Title">
              {comments.length} Comments
            </div>

            <div className="youtubeSelfComment">
              <img
                className="video-youtubeSelfCommentProfile"
                src={data?.user?.profilePic}
                alt=""
              />
              <div className="addComment">
                <input
                  className="addCommentInput"
                  placeholder="Add a Comment.."
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <div className="cancleSubmitButton">
                  <div className="cancleComment">Cancle</div>
                  <div className="cancleComment" onClick={handleCommentFunc}>
                    Comment
                  </div>
                </div>
              </div>
            </div>

            <div className="youtubeOthersComments">
              {/* // Comment Section  */}

              {comments.map((item, index) => {
                return (
                  <div key={item._id} className="youtubeSelfComment">
                    <img
                      className="video-youtubeSelfCommentProfile"
                      src={item?.user?.profilePic}
                      alt="userImg"
                    />
                    <div className="others-CommentSection">
                      <div className="otherComment-Section-header">
                        <div className="channelName-COmment">
                          {item?.user?.channelName}
                        </div>
                        <div className="commentTiming-Others">
                          {item?.createdAt.slice(0, 10)}
                        </div>
                      </div>

                      <div className="otherCommentSectionComment">
                        {item?.message}
                      </div>
                    </div>
                    <div className="comment-Options">
                    
                      {String(item.user._id) === currentUser && (
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                      )}
                      <button>Edit </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* // Video Suggessition Static  */}
      <div className="videoSuggession">
        {/* // Video Suggessiion Block  */}
        <div className="videoSuggesstionBlock">
          <div className="videoSuggesstion-Thumbnail">
            <img
              src="https://i.pinimg.com/736x/ff/87/74/ff87741b48b3aee99b80489c1339487f.jpg"
              alt="suggection video"
              className="videoSuggesstion-Thumbnail-img"
            />
          </div>
          <div className="videoSuggesstion-About">
            <div className="videoSuggession-About-titlee">
              Top 5 most Populer Video on Youtube Most viewrs
            </div>
            <div className="videoSuggessionAboutProfile"> Populer Videos </div>
            <div className="videoSuggessionAboutProfile">
              {" "}
              100M Views. 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggesstionBlock">
          <div className="videoSuggesstion-Thumbnail">
            <img
              src="https://i.pinimg.com/736x/ff/87/74/ff87741b48b3aee99b80489c1339487f.jpg"
              alt="suggection video"
              className="videoSuggesstion-Thumbnail-img"
            />
          </div>
          <div className="videoSuggesstion-About">
            <div className="videoSuggession-About-titlee">
              Top 5 most Populer Video on Youtube Most viewrs
            </div>
            <div className="videoSuggessionAboutProfile"> Populer Videos </div>
            <div className="videoSuggessionAboutProfile">
              {" "}
              100M Views. 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggesstionBlock">
          <div className="videoSuggesstion-Thumbnail">
            <img
              src="https://i.pinimg.com/736x/ff/87/74/ff87741b48b3aee99b80489c1339487f.jpg"
              alt="suggection video"
              className="videoSuggesstion-Thumbnail-img"
            />
          </div>
          <div className="videoSuggesstion-About">
            <div className="videoSuggession-About-titlee">
              Top 5 most Populer Video on Youtube Most viewrs
            </div>
            <div className="videoSuggessionAboutProfile"> Populer Videos </div>
            <div className="videoSuggessionAboutProfile">
              {" "}
              100M Views. 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggesstionBlock">
          <div className="videoSuggesstion-Thumbnail">
            <img
              src="https://i.pinimg.com/736x/ff/87/74/ff87741b48b3aee99b80489c1339487f.jpg"
              alt="suggection video"
              className="videoSuggesstion-Thumbnail-img"
            />
          </div>
          <div className="videoSuggesstion-About">
            <div className="videoSuggession-About-titlee">
              Top 5 most Populer Video on Youtube Most viewrs
            </div>
            <div className="videoSuggessionAboutProfile"> Populer Videos </div>
            <div className="videoSuggessionAboutProfile">
              100M Views. 1 day ago
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Video;
