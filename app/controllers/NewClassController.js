var Class = require('../models/Class');

var newClassController = {
    index: function (req, res) {
        res.render('new-class/lop-moi', {
            classes: Class.findAll()
        });
    },

    detailClass: function(req, res) {
        var classInfo;
        var classes = Class.findAll();
        for(var i = 0; i < classes.length; i++){
            if(classes[i].id == req.params.id){
                classInfo = classes[i];
                break;
            }
        }
        res.render('new-class/chi-tiet-lop-moi', {
            classInfo: classInfo
        })
    }
};

module.exports = newClassController;