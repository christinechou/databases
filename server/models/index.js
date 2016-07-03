var db = require('../db');   //database


// defines the messages and users models that your application will use

// var testMessage = {
//   username: 'Christine',
//   text: 'yolo',
//   roomname: 'lobby'
// };


db.con.connect();

module.exports = {
  messages: {
    get: function (callback) {
      db.con.query('SELECT * FROM message', function(err, rows) {
        if (err) {
          throw err;
        }

        rows = rows.map(function(row) {
          return JSON.parse(JSON.stringify(row));
        });

        rows = rows.map(function(msg) {
          return {
            username: msg.userId, text: msg.msg, roomname: msg.roomId
          };
        });
        console.log(rows);
        callback(rows);
      });


    } // a function which produces all the messages
    // post: function () {} // a function which can be used to insert a message into the database
  }

  // users: {
  //   // Ditto as above.
  //   get: function () {},
  //   post: function () {}
  // }

};


