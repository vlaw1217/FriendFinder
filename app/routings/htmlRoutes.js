
//const express = require("express");

let path = require("path");

module.exports = function (app) {
    //When button click on "go to survey" button, page will go to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // Set home page as default
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}


// Sets up the Express App
// =============================================================
/*const app = express();

const PORT = 3001;


//sets up the Express app to handle data parsing//
//Middleware help url coding//
app.use(express.urlencoded({ extended: true }));
// Middleware expres convert to json object//
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  
});

app.get("/friends", function (req, res) {
    //res.sendFile(path.join(__dirname, "apiRoutes.js"));
   return res.json(friends)
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});*/