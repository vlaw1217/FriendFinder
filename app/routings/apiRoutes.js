const express = require("express");

const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

const PORT = 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {      
        res.sendFile(path.join(__dirname, "../public/survey.html"))
});
let friends = {
    name: "",
    photo: "",
    scores: []
};


// Display a JSON of all possible friends
/*
app.get("/add/friends", function (req, res) {
    return res.json(friends)
});
*/
// New friend created to append

app.post("/add/friends", function (req, res) {
    let newFriends = req.body;
    //newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriends);

    //friends.push(newFriends);

    res.json(newFriends);
    //return res.json(newFriends)
});




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});