const express = require("express");
const app = express();

const PORT = 7001;

app.get("/", (req, res) => {
    res.send({
        message: "This is a Home Page"
    })
})

app.listen(PORT, (req, res) => {
   console.log(`Server is Running on PORT ${PORT}...`)
})