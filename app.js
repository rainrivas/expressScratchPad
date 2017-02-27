var express = require('express');
var app = express();
var request = require('request');

app.use(express.static("public")); // tell express to serve the contents of public directory
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/results', function(req, res) {
	var query = req.query.search;
	var url = "https://www.omdbapi.com/?s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var movies = JSON.parse(body);
            res.render("results", { movies: movies }); // ejsVarName: localFileVarName
        } else {
            console.log(error);
            res.send("We hit an error")
        }
    });
});

// app.post("/results", function(req, res) {
//     res.redirect('/results');
// });

app.listen(3000, function() {
    console.log("App running on port 3000");
});

// for GoMix use below
/*
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
*/
