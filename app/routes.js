var express         = require('express');
// create our route object
var route = express.Router();
//export our router
module.exports = route;

// controllers
var controller = require('./controllers/index');

// route
route.get('/', controller.home.index);
route.get('/new-class', controller.newClass.index);
route.get('/new-class/:id', controller.newClass.detailClass);
route.get('/contact', controller.contact.index);
route.post('/contact', controller.contact.sendEmailToEducation)
route.get('/tuition-price', controller.tuitionPrice.index);
route.get('/register-lecturer', controller.registerLecturer.index);