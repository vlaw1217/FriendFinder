const express = require("express");

const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

const PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//$("#button").click(function () {(
app.get("/", function (req, res) {
        
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
//});

/*app.get("/data/friends", function (req, res) {
    return res.json(friends);
});

app.post("/data/friends", function (req, res) {
    let newFriends = req.body;

    console.log(newFriends);

    friends.push(newFriends);

    res.json(newFriends);
});*/

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});