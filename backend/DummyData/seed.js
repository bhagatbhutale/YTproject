const Video = require("../Models/video")

const userId = "684fe0100f13605ecdf35189";

const videos = [
  {
    user: userId,
    title: "React Crash Course",
    description: "Learn React fundamentals in under 20 minutes.",
    videoLink: "https://www.youtube.com/embed/E6tAtRi82QY?si=RJKKIG_EhWnFQ89x",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/1*-KcEjo_kTcNSC6LHyt9edg.jpeg",
  },
  {
    user: userId,
    title: "JavaScript for Beginners",
    description: "Start coding in JavaScript today.",
    videoLink: "https://www.youtube.com/embed/sscX432bMZo?si=MG03O5PVw_y8--0f",
    thumbnail:
      "https://images.theengineeringprojects.com/image/main/2019/12/Introduction-to-JavaScript-with-complete-Guide-1.jpg",
  },
  {
    user: userId,
    title: "HTML5 Tutorial",
    description: "Basics of building webpages with HTML5.",
    videoLink: "https://www.youtube.com/embed/HcOc7P5BMi4?si=WnhhiXmgaxvefuaI",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6PooP7RIkdCz7SlviMtoLrL0M4DY17GqA&s",
  },
  {
    user: userId,
    title: "CSS Flexbox Guide",
    description: "Learn how to build flexible layouts.",
    videoLink: "https://www.youtube.com/embed/ESnrn1kAD4E?si=JCc9REr4Sm7dTOcX",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvA00GaUwlwEKhXxDgarATH7yRlRh3utSexQ&s",
  },
];

exports.seedVideos = async () => {
//   await Video.deleteMany(); 
  await Video.insertMany(videos);
  console.log("Dummy videos added.");
  process.exit();
};


