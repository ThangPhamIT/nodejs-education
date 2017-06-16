var Lecturer = require('../models/Lecturer');

var lecturerController = {
    index: function (req, res) {
        res.render('parents/gia-su-tieu-bieu', {
            lecturers: Lecturer.findAll()
        });
    },

    selectLecturer: function (req, res) {
        var lecturerInfo;
        var lecturers = Lecturer.findAll();
        if (lecturers != null && lecturers.length > 0) {
            for (var i = 0; i < lecturers.length; i++) {
                if (lecturers[i].id == req.params.id) {
                    lecturerInfo = lecturers[i];
                    break;
                }
            }
        }
        res.render('parents/chon-gia-su-giang-day', {
            lecturerInfo: lecturerInfo
        })
    }
};

module.exports = lecturerController;