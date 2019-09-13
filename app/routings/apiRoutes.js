let friends = require("../data/friends.js");

// Get data from api friends and show it as json 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
// api post request
    app.post("/api/friends", function (req, res) {
        let totalDifference = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        // Take the result from the user post, converted user scores to number
        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores;
        
        let x = userScores.map(function (item){
            return parseInt(item, 10)
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: x
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        let sum = x.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend " + bestMatch.friendDifference);
        console.log("-------------------------------------------------")
        
        //Loop all the friends possibility in the database
        for (var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Difference " + totalDifference);
            console.log("Best match friend " + bestMatch.friendDifference);

            let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("--------------------------------------------")

        // Sum of the differences with the best match
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Different");
        }

    //Save the users data to the database, return a json with the best match
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(bestMatch);
    });

    
};










/*const express = require("express");

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

/*app.post("/add/friends", function (req, res) {
    let newFriends = req.body;
    //newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriends);

    //friends.push(newFriends);

    res.json(newFriends);
    //return res.json(newFriends)
});




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});*/