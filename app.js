// EJS demo

var express = require('express');
var app = express();

app.use(express.static("public")); // tell express to serve the contents of public directory
app.set("view engine","ejs"); // tell express we'll be using EJS and we won't have to pass the file extensions when we render
// routes
app.get("/", function(req, res) {
    // res.send("<h1>Welcome to EJS Demo Start page</h1><h2>Amaze balls H2</h2>"); // while this is do-able, it's ridiculous to go this route
    // instead of doing the above, we'll just do a render to render an HTML file.
    // the html files we render are templates (not some basic html file)
    res.render('home'); // ejs --> embedded javascript
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing); // In addition to doing something like this, you can send EJS files on the fly
    // RENDER Looks inside views directly (it's waht express does);
    res.render('love', { thingWeLove: thing }); // you can pass an object of params to render and will assign them to variables in the EJS fail which match the key
});

app.get("/random", function(req, res) {
    res.render('randomdata');
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Chuck" },
        { title: "Post 3", author: "Becky" }
    ];
    res.render("posts", { posts: posts });
})


app.listen(3000, function() {
    console.log("Listening on port 3000");
});
