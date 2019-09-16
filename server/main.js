const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;

server.run(config);



var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});



