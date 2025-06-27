const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser")
const cors = require("cors")
const frotendUrl = process.env.FRONTEND_URL;


app.use(
  cors({
    origin: frotendUrl,
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())
// db
const connectDB = require("./Connection/conn")

// routes imported here
const AuthRoute = require("./Routes/user");
const VideoRoutes = require("./Routes/video")
const CommentRoutes = require("./Routes/comment");


app.use("/auth", AuthRoute);
app.use("/api", VideoRoutes)
app.use("/commentApi", CommentRoutes)


// Please Firstfall dummy data seeding  >> userId change in seed.js file 

// db 
connectDB()

console.log("Firstfall signup karlo, then login karo, or { userId } change kro seed.js me tabhi Videos Inserts Honge then videos dekhna shuru karo...")
// seedVideos()

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})