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



const pg = require('pg');

var connectionString = "postgres://bzshbrrnoxietj:46501dac4a137a60da10a1de5fd5741ddc665c4337c36ea5007458c5c46dc1bf@ec2-174-129-194-188.compute-1.amazonaws.com:5432/d3cld8si9il4oe?ssl=true"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * from salesforce.contact', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
