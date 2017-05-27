//======== express ========//
var express         = require('express');
var path            = require('path');
var expressLayouts  = require('express-ejs-layouts');
var app             = express();
var port            = process.env.PORT || 8082;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// route our app
var router = require('./app/routes');
app.use('/', router);

//set static files (scc, img, ...) location
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(port, function(){
    console.log('Start education website');
});

