
import "./Video.css"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
// Video Page
const Video = () => {
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video-youtube">
          <video
            src=""
            width="400"
            controls
            autoPlay
            className="video-youtube-video"
          >
            <source
              src="https://www.youtube.com/watch?v=xxMRDHjLliw&ab_channel=Shelbyimprovers"
              type="video"
            />
            <source src="" />
            Your browser does not support the Video tag
          </video>
        </div>

        <div className="video-YoutubeAbout">
          <div className="video-youtubeTitle">{"Javascript for Beginner"}</div>
          <div className="youtube-video-ProfileBlock">
            <div className="youtube-video-ProfileBlock-left">
              <div className="youtube-video-ProfileBlock-left-img">
                <img
                  className="youtube-video-ProfileBlock-left-image"
                  src={
                    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sony_LIV2017.jpg/200px-Sony_LIV2017.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="youtubeVideo-subView">
                <div className="youtubePostProfileName">{"User1"}</div>
                <div className="youtubePostProfileSubs">{"2025-07-06"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtubeVideo-LikeBlock">
              <div className="youtubeVideo-likeBlock-Like">
                <ThumbUpOffAltIcon />
                <div className="youtube-video-likeBlock-NoOfLikes">{32}</div>
              </div>
              <div className="youtubeVideo-Divider"></div>
              <div className="youtubeVideo-likeBlock-Like">
                <ThumbDownOffAltIcon />
              </div>
            </div>
          </div>

          <div className="youtube-video-About">
            <div>2025-07-06</div>
            <div>THis is a Cool Video</div>
          </div>

          <div className="youtubeComment-Section">
            <div className="youtubeComment-Section-Title"> 3 Comments</div>

            <div className="youtubeSelfComment">
              <img
                className="video-youtubeSelfCommentProfile"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sony_LIV2017.jpg/200px-Sony_LIV2017.jpg"
                alt=""
              />
              <div className="addComment">
                <input
                  className="addCommentInput"
                  placeholder="Add a Comment.."
                  type="text"
                />
                <div className="cancleSubmitButton">
                  <div className="cancleComment">Cancle</div>
                  <div className="cancleComment">Comment</div>
                </div>
              </div>
            </div>

            <div className="youtubeOthersComments">
              {/* // Comment Section  */}
              <div className="youtubeSelfComment">
                <img
                  className="video-youtubeSelfCommentProfile"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sony_LIV2017.jpg/200px-Sony_LIV2017.jpg"
                  alt=""
                />
                <div className="others-CommentSection">
                  <div className="otherComment-Section-header">
                    <div className="channelName-COmment">Username</div>
                    <div className="commentTiming-Others">2025-06-07</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    THis is a New Video on Youtube
                  </div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img
                  className="video-youtubeSelfCommentProfile"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sony_LIV2017.jpg/200px-Sony_LIV2017.jpg"
                  alt=""
                />
                <div className="others-CommentSection">
                  <div className="otherComment-Section-header">
                    <div className="channelName-COmment">Username</div>
                    <div className="commentTiming-Others">2025-06-07</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    THis is a New Video on Youtube
                  </div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img
                  className="video-youtubeSelfCommentProfile"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sony_LIV2017.jpg/200px-Sony_LIV2017.jpg"
                  alt=""
                />
                <div className="others-CommentSection">
                  <div className="otherComment-Section-header">
                    <div className="channelName-COmment">Username</div>
                    <div className="commentTiming-Others">2025-06-07</div>
                  </div>

                  <div className="otherCommentSectionComment">
                    THis is a New Video on Youtube
                  </div>
                </div>
              </div>
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
              {" "}
              100M Views. 1 day ago
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Video
