var express = require('express');
var router = express.Router();
var User = require('../models/user');
/*

addUser takes a POST request specifying a new user's req.body to add a new user
to the database and calculates the user's boundary box for Here/matchmaking
here is how the request should look:
req = { username: 'username',
        latitude: number,
        longitude: number
      }
latitude and longitude are automatically collected by the browser in DialogBox.js

*/

router.post('/', function (req, res) {
    console.log('add user accessed');
    var data = req.body;
    console.log("added: " + data.username);
    new User({
      username:data.username
    }).save(function (err, user) {
        if (err) {
              console.log(err);
              res.sendStatus(400);
            }
        console.log("Sending user id back to client");
        res.status(200).send(
          {
            userId: user._id,
            findUser: true
          }
          );
    });
    //res.sendStatus(200);
});

module.exports = router;
