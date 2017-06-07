// require express
var express = require('express');
var path = require('path');

// create our route object
var route = express.Router();

//export our router
module.exports = route;

// model
var images = [
    { id: 1, url: 'images/home.png' },
    { id: 2, url: 'images/about.jpg' },
    { id: 3, url: 'images/contact.jpg' }
];

var Image = {
    findAll: function () {
        return images;
    }
};

var homeController = {
    index: function (req, res) {
        res.render('pages/index', {
            user: "Thang Pham",
            message: "I am web developer",
            images: Image.findAll()
        });
    }
};

var contactController = {
    index: function (req, res) {
        res.render('pages/contact');
    }
}

var tuitionPriceController = {
    index: function(req, res){
        res.render('pages/parents/tuition-price');
    }
}

var registerLecturerController = {
    index: function(req, res){
        res.render('pages/parents/register-lecturer');
    }
}

// route and controller
route.get('/', homeController.index);

route.get('/contact', contactController.index);

route.get('/tuition-price', tuitionPriceController.index);

route.get('/register-lecturer', registerLecturerController.index);