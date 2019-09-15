let friends = require("../data/friends.js");
let path = require("path");
let fs = require('fs');
//let popupS = require("popups");


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
        let userPhoto = userData.photo;
        let userScores = userData.scores;

        let x = userScores.map(function (item) {
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
        for (var i = 0; i < friends.length; i++) {
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


        var fs = require("fs");


        var addData = ",{\rname:\"" + userName + "\",\rphoto:\"" + userPhoto + "\",\rscores:[" + userScores + "]\r}\r"
        var cursor = "//insert";
        addData += cursor;
        fs.readFile("app/data/friends.js", "utf-8", function (err, data) {
            if (err) {
                console.log(err);
                return;
            }

            var newData = data.replace(/\/\/insert/, addData);
            fs.writeFile("app/data/friends.js", newData, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done");
            });
        });

        console.log(userData);
        res.json(bestMatch);

    




    });

};









