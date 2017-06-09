var Class = require('../models/Class');

var homeController = {
    index: function (req, res) {
        res.render('home/index', {
            classes: Class.findAll()
        });
    }
};

module.exports = homeController;