var models = require('../models');

//get some sore of data structure from models
  //more specifcally...
  //an array of objects that represent a message
  //an array of objects that represents a ueser


//defines the messages and users controllers that your application will use.

// var testMessage = {
//   username: 'Christine',
//   text: 'yolo',
//   roomname: 'lobby'
// };

module.exports = {
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      models.messages.get(function(messages) {
        res.send({results: messages});      
      });
    }
    // post: function (req, res) {} // a function which handles posting a message to the database
  }

  // users: {
  //   // Ditto as above
  //   get: function (req, res) {},
  //   post: function (req, res) {}
  // }
};

