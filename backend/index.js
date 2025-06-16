const express = require("express");
const app = express();
const PORT = 7001;
app.use(express.json())
// db
const connectDB = require("./Connection/conn")


// routes imported here
const AuthRoute = require("./Routes/user");


app.use("/auth", AuthRoute);



// db 
connectDB()

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})