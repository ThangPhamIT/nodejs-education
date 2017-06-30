var Lecturer = require('../models/Lecturer');

var lecturerController = {
    index: function (req, res) {
        Lecturer.findAll(function (err, lecturers) {
            res.render('parents/gia-su-tieu-bieu', {
                lecturers: lecturers
            });
        });
    },

    registerDoLecturer: function (req, res) {
        res.render('lecturer/dang-ky-lam-gia-su', {
        });
    },

    createLecturer: function (req, res) {
        var full_name = req.body.full_name;
        var address = req.body.address;
        var phone = req.body.phone;
        var email = req.body.email;
        var education_name = req.body.education_name;
        var major_name = req.body.major_name;
        var account_name = req.body.account_name;
        var password = req.body.password;
        var level_degree = req.body.level_degree;
        var teaching_area = req.body.teaching_area;
        var class_name = req.body.class_name;
        var number_of_time = req.body.number_of_time;
        var note = req.body.note;

        console.log(teaching_area);

        Lecturer.createLecturer({
            full_name: full_name,
            address: address,
            phone: phone,
            email: email,
            education_name: education_name,
            major_name: major_name,
            account_name: account_name,
            password: password,
            level_degree: level_degree,
            teaching_area: teaching_area,
            class_name: class_name,
            number_of_time: number_of_time,
            note: note
        }, function(err){

        });
    }
};

module.exports = lecturerController;