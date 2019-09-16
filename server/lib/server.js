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


const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv', 
    debug    :  false
});

// query rows in the table

function queryRow(userName) {
    let selectQuery = 'SELECT * FROM user';    
    let query = mysql.format(selectQuery,["todo","user", userName]);
    // query = SELECT * FROM `todo` where `user` = 'shahid'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}


