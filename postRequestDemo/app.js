var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend",function(req, res){
	res.send(req.params.friend);
});

app.get("/friends",function(req,res){
	var friends = ["Josh","Duc","Lily","John","Jane"];
	res.render("friends",{friends: friends}); // ejsVarName: localFileVarName
});

app.listen(3000, function() {
    console.log("Server started on PORT 3000");
});
