const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);

app.use('/', express.static(`${process.cwd()}/../client`));

module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};


/*var mysql = require('mysql');  
var con = mysql.createConnection({  
  host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv', 
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM user", function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  */


//var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv',
});
//var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT * from user', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});



