const express = require("express");


const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3001;


//require("./app/routings/apiRoutes.js")(app);
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*app.get('/', function (req, res) {
    res.send("what's up!!!!!")
})*/

/*app.get("/", function (req, res) {  
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
    //console.log(res.sendFile)
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    //console.log(res.sendFile)
});*/

require("./app/routings/apiRoutes.js")(app);
require("./app/routings/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});