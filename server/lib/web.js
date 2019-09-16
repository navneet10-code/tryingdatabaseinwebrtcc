var connectionString = "postgres://bzshbrrnoxietj:46501dac4a137a60da10a1de5fd5741ddc665c4337c36ea5007458c5c46dc1bf@ec2-174-129-194-188.compute-1.amazonaws.com:5432/d3cld8si9il4oe"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM user', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
