
const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');



var abcd = 'parth@gmail.com';


var mysql = require('mysql'); 
var con = mysql.createConnection({ 
host : 'sql12.freemysqlhosting.net',
database : 'sql12304794',
user : 'sql12304794',
password : 'PLSEEGHnWv', 
}); 
con.connect(function(err) { 
if (err) throw err; 
con.query("SELECT UserName FROM user where email= 'parth@gmail.com'", function (err, result) { 
if (err) throw err; 
console.log(result); 
setValue(result);

}); 
}); 

function setValue(value) {
someVar = value[0].UserName;
console.log('nnnnnnnnnnnnnnnnnnnnnnn',someVar);
}


console.log('abovee the body vlaueeeeee varrrr');











const app = express();
const server = createServer(app);

app.use('/', express.static(`${process.cwd()}/../client`));












const bodyParser = require("body-parser");
//const express = require("express");
//const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(`POST request: username is ${username} and password is ${password}`);
  res.end(`You are now logged in Mr(s) ${username}`);
  console.log('username is the ',username);
  abcd = username;
  console.log('abcd value',abcd);
});

//module.exports = { abcde: abcd };
//module.exports.vari = abcd;

















module.exports = () => {
  
  const sum = 'abvdc';

  return `${sum}`;
};

module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};
