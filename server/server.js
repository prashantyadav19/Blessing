// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var app    = express();
var fs = require('fs');
// configuration ===========================================


// connect to our mongoDB database ========================
var dbPath = require('./config/db');
mongoose.connect(dbPath.url);
mongoose.connection.on('error',function(){
    console.log('mongodb connection Error. please make sure that mongodb is running.');
});

// parse application/json ================================
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// set our port===========================================
var port = process.env.PORT || 2000;  // startup our app at http://localhost:8080

// load models ===========================================
var model_files, model_loc;
app.models = {};
model_loc = __dirname + '/models';
model_files = fs.readdirSync(model_loc);
model_files.forEach(function (file) {
    return (require(model_loc + '/' + file)).boot(app);
});

// load all controller =====================================
var controller_loc = __dirname + '/controllers';
var controller_files = fs.readdirSync(controller_loc);
controller_files.forEach(function (file) {
    return (require(controller_loc + '/' + file))(app);
});

// load all routes ===========================================
var routes_loc = __dirname + '/routes';
var routes_files = fs.readdirSync(routes_loc);
routes_files.forEach(function (file) {
    return (require(routes_loc + '/' + file))(app);
});

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
        res.send(204);
    }
    else {
        next();
    }
});
app.listen(port);