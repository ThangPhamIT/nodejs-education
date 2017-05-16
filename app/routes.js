// require express
var express = require('express');
var path    = require('path');

// create our route object
var route = express.Router();

//export our router
module.exports = route;

// route for our homepage
route.get('/', function(req, res) {
    res.render('pages/index', {user:"Thang Pham"});
});

route.get('/about', function(req, res) {
    res.render('pages/about');
});

route.get('/contact', function(req, res) {
    res.render('pages/contact');
});
route.post('/contact', function(req, res) {

});