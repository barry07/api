// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var User = require('/Users/suzanned/projects/node/api/models/user'); //
var express= require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser'); // get body-parser
var morgan = require('morgan'); // used to see requests
var mongoose = require('mongoose'); // for working w/ our database = process.env.PORT || 8080; // set the port for our app
var port = process.env.PORT || 1138; // set the port for our app

// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
Authorization');
next();
});

// log all requests to the console
app.use(morgan('dev'));

//routes for api
//==============

//basic route for hame page
app.get('/', function(req, res) {
	res.send('Welcome Human');
});

//get instance of express router
var apiRouter = express.Router();

//test route
//accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
	res.json({ message: 'welcome human to our api' });
});

//more routes for api here

//register our routes
//all of our routes will be prefixed with /api
app.use('/api', apiRouter);

//start the server
//================
app.listen(port);
console.log('listening on port ' + port);

