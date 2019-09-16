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




/*//var express = require("express");
const mysql = require('mysql');
//var app = express();
app.use(express.logger());

var db_config = {
    host : 'sql12.freemysqlhosting.net',
database : 'sql12304794',
user : 'sql12304794',
password : 'PLSEEGHnWv'
};

var connection;

function handleDisconnect() {
    console.log('1. connecting to db:');
    connection = mysql.createConnection(db_config); // Recreate the connection, since
													// the old one cannot be reused.

    connection.connect(function(err) {              	// The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('2. error when connecting to db:', err);
            setTimeout(handleDisconnect, 1000); // We introduce a delay before attempting to reconnect,
        }                                     	// to avoid a hot loop, and to allow our node script to
    });                                 	// process asynchronous requests in the meantime.
    											// If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('3. db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	// Connection to the MySQL server is usually
            handleDisconnect();                      	// lost due to either server restart, or a
        } else {                                      	// connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

app.get('/', function(request, response) {
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
	console.log('rows',rows);
        //response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
	response.send(['hello how are you?']);
	console.warn('code finished for req send');    
    });
});

/*var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});*/
*/

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * from salesforce.contact ;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
