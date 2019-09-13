let friends = [
    {
        name: "Billy White",
        photo: "https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjU1rvG7M7kAhWCxIUKHYw6C3EQjRx6BAgBEAQ&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fcats&psig=AOvVaw2jr99vDPC8auWVLr6BZRvW&ust=1568500155988181",
        scores: [3, 4, 3, 5, 4, 2, 4, 2, 3, 3]
    },
    {
        name: "Amy Spencer",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjkrqyb7c7kAhU5AmMBHfGCDB4QjRx6BAgBEAQ&url=https%3A%2F%2Fmymodernmet.com%2Frobert-sijka-pictures-of-maine-coon-cats%2F&psig=AOvVaw32Ou4jZIxscDfHGJCfG-xW&ust=1568500331761927",
        scores: [2, 4, 5, 1, 1, 2, 3, 2, 4, 5]

    },
    {
        name: "Kate Austen",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwittbiY7s7kAhVgAGMBHXRaADkQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fmymodernmet.com%252Frobert-sijka-pictures-of-maine-coon-cats%252F%26psig%3DAOvVaw32Ou4jZIxscDfHGJCfG-xW%26ust%3D1568500331761927&psig=AOvVaw32Ou4jZIxscDfHGJCfG-xW&ust=1568500331761927",
        scores: [1, 2, 3, 4, ,2, 3, 2, 2, 3, 3]
         
    },
    {
        name: "Jack Shephard",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj7j5Ol7s7kAhUJAmMBHQEqDeAQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.petful.com%252Fcat-breeds%252Fprofile-maine-coon%252F%26psig%3DAOvVaw32Ou4jZIxscDfHGJCfG-xW%26ust%3D1568500331761927&psig=AOvVaw32Ou4jZIxscDfHGJCfG-xW&ust=1568500331761927",
        scores: [2, 2, 4, 4, 3, 3, 2, 3, 5, 5]
    },
    {
        name: "John Locke",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwif5YC07s7kAhWPDxQKHdsMBlsQjRx6BAgBEAQ&url=https%3A%2F%2Fdowneast.com%2Fgentlegiants%2F&psig=AOvVaw32Ou4jZIxscDfHGJCfG-xW&ust=1568500331761927",
        scores: [2, 4, 4, 3, 4, 4, 3, 1, 2, 3]
    },
    {
        name: "Claire de Ravin",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjaso-57s7kAhV4AWMBHcJ4CqEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pets4homes.co.uk%2Fpet-advice%2Ften-interesting-facts-about-maine-coon-cats.html&psig=AOvVaw32Ou4jZIxscDfHGJCfG-xW&ust=1568500331761927",
        scores: [3, 3, 3, 4, 4, 5, 5, 3, 3, 3]
    }
    
]
module.exports = friends;
/*const express = require("express");

const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

const PORT = 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

$("#subBtn").on("click", function (event) {
    event.preventDefault();
    var newFriends = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        select1: $("#select1").val().trim(),
        select2: $("#select2").val().trim()
    };

    // Question: What does this code do??
    $.post("/add/friends", newFriends)
        .then(function (data) {
            console.log("add.html", data);
            alert("Adding character...");
        });
});



        // Question: What does this code do
 

    /*$("#subBtn").on("click", function (event) {
        event.preventDefault();
        var newFriends = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            select1: $("#select1").val().trim(),
            select2: $("#select2").val().trim()
        };

        // Question: What does this code do??
        $.post("/add/friends", newFriends)
            .then(function (data) {
                console.log("add.html", data);
                alert("Adding character...");
            });
    });






});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});*/