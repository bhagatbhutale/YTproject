const express = require("express");
const app = express();
// db
const connectDB = require("./Connection/conn")

const PORT = 7001;

app.get("/", (req, res) => {
    res.send({
        message: "This is a Home Page"
    })
})

// db 
connectDB()

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})