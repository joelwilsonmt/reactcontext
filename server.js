var express = require('express');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
//var path = require('path');

var addUser = require('./routes/addUser');
var updateUser = require('./routes/updateUser');

var app = express();
var http = require('http').Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/addUser', addUser);
app.use('/updateUser', updateUser);

let port = process.env.PORT || 3001;

http.listen(port, function(){
  console.log('listening on *:' + port);
});
