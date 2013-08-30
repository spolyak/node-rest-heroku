//require postgre driver
/*
var pg = require('pg');    
//config file contains DB credentials, schema...
var config = require('./config.json');   
 
var conString = "tcp://"+config.db.username+":"+config.db.password+
"@"+config.db.host+":"+config.db.port+"/"+config.db.name;
var client = new pg.Client(conString);
 
if(!client){
  console.log("Starting client to DB "+conString+ " failed")
}else{
  console.log("Started client to  DB"+client.host+"/"+client.database);
}
 
exports.client = client;
*/

var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});