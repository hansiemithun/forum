// load the things we need
var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var app = express();
var port = 8080;
// Declare usefull stuff for DB purposes
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweets');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//BODY PARSER CHANGED AFTER VERSION 4 OF EXPRESSJS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var User = require('./models/users.js').make(Schema, mongoose);
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets/'));
app.use(function(req, res, next) {
	if (!isEmpty(req.body)) {		
		req.params = req.body;
	} else if (!isEmpty(req.query)) {
		req.params = req.query;
	}	
	next();	
});
//app.use(express.static('assets/css/vendors/bootstrap/version/3.2/bootstrap.min.css'));
// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});


app.get('/users', function(req, res) {
	var pwd,hashpwd;
	var u = new User();
		
    pwd 		= req.query.pwd;
    hashpwd 	= bcrypt.hashSync(pwd);

    u.firstName = req.query.firstname;
    u.email 	= req.query.email;
    u.password  =  hashpwd;
        
	console.log(req.params, req.body, req.query, hashpwd);
	u.save();
	//res.render('pages/about');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

app.listen(port);
console.log('application is listening in port : ' + port);