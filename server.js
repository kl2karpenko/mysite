var
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 2006,
	publicDir = process.argv[2] || __dirname + '/public';


var methodOverride = require('method-override');

// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(express.static(publicDir));

app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, port);
app.listen(port);

console.log("Running at Port 2006");