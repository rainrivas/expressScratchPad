// EJS demo

var express = require('express');
var app = express();

// routes
app.get("/", function(req, res) {
    // res.send("<h1>Welcome to EJS Demo Start page</h1><h2>Amaze balls H2</h2>"); // while this is do-able, it's ridiculous to go this route
    // instead of doing the above, we'll just do a render to render an HTML file.
    // the html files we render are templates (not some basic html file)
    res.render('home.ejs'); // ejs --> embedded javascript
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing); // In addition to doing something like this, you can send EJS files on the fly
    // RENDER Looks inside views directly (it's waht express does);
    res.render('love.ejs', { thingWeLove: thing }); // you can pass an object of params to render and will assign them to variables in the EJS fail which match the key
});

app.get("/random",function(req,res){
	res.render('randomdata.ejs');
});


app.listen(3000, function() {
    console.log("Listening on port 3000");
});
