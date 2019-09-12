const express = require("express");

const path = require("path");


// Sets up the Express App
// =============================================================
const app = express();

const PORT = 3000;

//sets up the Express app to handle data parsing//
//Middleware help url coding//
app.use(express.urlencoded({ extended: true }));
// Middleware expres convert to json object//
app.use(express.json());




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

/*app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    //console.log(res.sendFile)
});*/
























app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});