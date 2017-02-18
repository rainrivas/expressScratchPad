var express = require('express'),
    app = express();

//////////////////
// Routes
//////////////////

app.get("/", function(req, res) {
    res.send("Hi there");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye");
});

app.get("/dog", function(req, res) {
    console.log("Dog req made, give res");
    res.send("Bork bork");
});

app.get("/r/:subReddit", function(req, res) {
    var subReddit = req.params.subReddit;
    res.send("Sample subreddit for showing pattern matches. Welcome to " + subReddit);
});

app.get("/r/:subReddit/comments/:id/:title/", function(req, res) {
    res.send("Sample subreddit comments pattern matches for " + req.params.subReddit + " / " + req.params.id + " / " + req.params.title);
});

// order of routes matter, so catch-all should be last or else it will ALWAYS run
app.get("*", function(req, res) {
    res.send("But gwhy you look for nonsense?");
});

app.listen(3000, function() {
    console.log("Sever started on port: 3000");
});
