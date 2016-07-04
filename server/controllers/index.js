var models = require('../models');

//get some sort of data structure from models
  //more specifcally...
  //an array of objects that represent a message
  //an array of objects that represents a ueser


//defines the messages and users controllers that your application will use.


module.exports = {
  messages: {
    get: function (req, res) {   // a function which handles a get request for all messages
      // models.messages.get(function(err, results) {
      //   if (err) {
      //     console.log('error getting messages');
      //     return err;
      //   } else {
      //     res.json(results);
      //   }
      // });
      //Refactored using promises:
      models.messages.get()
        .then(function(results) {
          res.send({results: results});
        });
    },
    post: function (req, res) { // grab stream of buffer data and compose post msg info to db:
      // var messageData = [req.body.username, req.body.message, req.body.roomname]
    //   models.messages.post(messageData, function(err, results) {
    //     if (err) {
    //       console.log('error posting message');
    //       return err;
    //     } else {
    //       res.sendStatus(201);
    //     }
    //   });
    // }
      models.messages.post(req.body)
        .then(function() {
          res.send();
        });
        .catch(function(err) {
          res.status(500).send(JSON.parse(err));
        });
    },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get(function(err, results) {
      //   if (err) {
      //     console.log('error getting users');
      //     return err;
      //   } else {
      //     res.json(results);
      //   }
      // });
        models.users.get()
          .then(function(results) {
            res.send({results: results});
          });
    },
    post: function (req, res) {
      // models.users.get(function(err, results) {
      //   if (err) {
      //     console.log('error posting user');
      //     return err;
      //   } else {
      //     res.sendStatus(201);
      //   }
      // });
      models.users.post(req.body)
        .then(function() {
          res.end();
        })
        .catch(function(err) {
          res.status(500).send(JSON.prase(err));
        });
    }
  }
};

