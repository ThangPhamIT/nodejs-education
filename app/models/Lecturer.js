var db = require('./db');

var Lecturer = {
    findAll: function (callback) {
      db.query('select * from public."Lecturer"', [], function(err, result){
          if (err) {
            return console.error ('error running query', err);
          }
          console.log(JSON.stringify(result.rows));
          callback(err, result.rows);
      });
    }
};

module.exports = Lecturer;