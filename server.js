// load the things we need
var express = require('express');
var app = express();
var port = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets/'));
//app.use(express.static('assets/css/vendors/bootstrap/version/3.2/bootstrap.min.css'));
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(port);
console.log('application is listening in port : '+port);