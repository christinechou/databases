var db = require('../db');   //database


// defines the messages and users models that your application will use

// var testMessage = {
//   username: 'Christine',
//   text: 'yolo',
//   roomname: 'lobby'
// };


// CREATE TABLE messages (
//   /* Describe your table here.*/

//   id int NOT NULL AUTO_INCREMENT,
//   userId int NOT NULL,
//   text varchar(200)  NOT NULL,
//   roomname varchar(20),
//   PRIMARY KEY (ID)
// );

// CREATE TABLE users (
//   id        int    NOT NULL AUTO_INCREMENT,
//   name  varchar(40)   NOT NULL,
//   PRIMARY KEY (ID)
// );


module.exports = {
  messages: {
    get: function (callback) { 
      //fetch all msgs
      //id, text, userId, roomname
      var queryStr = `
        SELECT messages.id, messages.text, messages.userId, messages.roomname 
        FROM messages 
          LEFT OUTER JOIN users ON (messages.userId = users.id)
        ORDER BY messages.id
      `;
      db.con.query(queryStr, function(err, results) {
        err ? callback(err) : callback(err, results);
      });
    }, 
    post: function (msg, callback) {// a function which can be used to insert a message into the database
      //create message for user id based on given username
      var queryStr = `
        INSERT IGNORE INTO rooms (name)
        SELECT ${db.escape(msg.roomname)};
        INSERT IGNORE INTO users (name)
        SELECT ${db.escape(msg.name)};
        INSERT IGNORE INTO messages(text, userId, roomname) 
        FROM users, rooms
        WHERE users.name like ${db.escape(msg.name)}
      `;
      db.query(queryStr, msg, function(err, results) {
        callback(err, results);
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) { //fetch all users
      var queryStr = `
        SELECT * FROM users
      `;
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (msg, callback) { //create a user
      var queryStr = `
        INSERT IGNORE INTO users (name) 
        SELECT '${user.name}'
      `;
      db.query(queryStr, function(err) {
        !err ? resolve() : reject(err);
      });
    }
  }

};


