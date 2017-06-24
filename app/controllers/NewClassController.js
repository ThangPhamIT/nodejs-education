var Class = require('../models/Class');

var newClassController = {
    index: function (req, res) {
        Class.findAll(function(err, classes){
            res.render('new-class/lop-moi', {
                classes: classes
            });
        });
    },

    detailClass: function (req, res) {
        // var classInfo;
        // var classes = Class.findAll();
        // if (classes != null && classes.length > 0) {
        //     for (var i = 0; i < classes.length; i++) {
        //         if (classes[i].id == req.params.id) {
        //             classInfo = classes[i];
        //             break;
        //         }
        //     }
        // }
        // res.render('new-class/chi-tiet-lop-moi', {
        //     classInfo: classInfo
        // })

        Class.getClassById(req.params.id, function(err, classInfo){
            res.render('new-class/chi-tiet-lop-moi', {
                classInfo: classInfo
            });
        });
    }
};

module.exports = newClassController;