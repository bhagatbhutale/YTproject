const express = require("express");
const app = express();
const PORT = 7001;
const cookieParser = require("cookie-parser")
app.use(express.json())
app.use(cookieParser())
// db
const connectDB = require("./Connection/conn")

// routes imported here
const AuthRoute = require("./Routes/user");
const VideoRoutes = require("./Routes/video")



app.use("/auth", AuthRoute);
app.use("/api", VideoRoutes)



// db 
connectDB()

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})