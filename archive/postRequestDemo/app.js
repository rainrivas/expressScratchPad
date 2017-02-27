var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var friends = ["Josh", "Duc", "Lily", "John", "Jane"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
	friends.push(req.body.friend);
    res.redirect('/friends');
});

app.get("/friends", function(req, res) {

    res.render("friends", { friends: friends }); // ejsVarName: localFileVarName
});

app.listen(3000, function() {
    console.log("Server started on PORT 3000");
});
