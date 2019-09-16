var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get('/', function(req, res){
  res.render('form');// if jade
  // You should use one of line depending on type of frontend you are with
  //res.sendFile(__dirname + '/form.html'); //if html file is root directory
 res.sendFile("index.html"); //if html file is within public directory
});


app.post('/login', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send('welcome, ' + req.body.username)
})
