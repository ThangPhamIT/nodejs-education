var Class = require('../models/Class');

var homeController = {
    index: function (req, res) {
        res.render('home/trang-chu', {
            classes: Class.findAll()
        });
    }
};

module.exports = homeController;