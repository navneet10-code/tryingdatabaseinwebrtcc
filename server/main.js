const config = require('../config.json');
const server = require('./lib/users');

config.PORT = process.env.PORT || config.PORT;

server.run(config);


/*var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/src/html'));

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})*/



