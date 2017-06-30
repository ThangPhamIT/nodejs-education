var db = require('./db');

var Lecturer = {
    findAll: function (callback) {
      db.query('select * from public."Lecturer" order by id', [], function(err, result){
          if (err) {
            return console.error ('error running query', err);
          }
          console.log(JSON.stringify(result.rows));
          callback(err, result.rows);
      });
    },

    createLecturer: function (lecturer, callback) {
        db.query('insert into public."Lecturer"(full_name, address, phone, email, education_name, major_name, account_name, password, level_degree, teaching_area, class_name, number_of_time, note)' +
        ' values($1, $2, $3, $4, $5)',
        [message.full_name, message.address, message.phone, message.email, message.message],
        function(err, result){
            callback(err);
        })
    },
};

module.exports = Lecturer;