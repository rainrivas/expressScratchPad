var request = require('request');
request('http://www.google.com.com', function(error, response, body) {
	// if(!error && response.statusCode == 200) // The easiest and shortest way to handle this 
    if (error) {
        console.log('Shits on fire yo');
        console.log(error);
    } else if (response.statusCode == 200) {
        console.log(body); // show the html for google homepage
    }
});
