const express = require("express");
const app = express();
const PORT = 7001;
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(
  cors({
    origin: "http://localhost:5173",
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



// db 
connectDB()

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})