var express = require('express'),
    app = express();

//////////////////
// Routes
//////////////////

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.subReddit;
    var noise = ""
    if (animal === "pig") {
        noise = "Oink"
    }
    else if (animal === "cow") {
        noise = "Moo"
    }
    else (animal === "dog") {
        noise = "Woof Woof!"
    }

    res.send("The " + animal + " says " + noise);
});

app.get("/repeat/:phrase/:iterations/", function(req, res) {
    var phraseArray = new Array(req.params.iterations)
    for (i = 0; i < req.params.iterations; i++) {
        phraseArray[i]=req.params.phrase;
    }
    res.send(phraseArray.join(' '));
});

// order of routes matter, so catch-all should be last or else it will ALWAYS run
app.get("*", function(req, res) {
    res.send("But gwhy you look for nonsense?");
});

app.listen(3000, function() {
    console.log("Sever started on port: 3000");
});
