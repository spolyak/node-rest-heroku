//require postgre driver
var pg = require('pg');    
 
var conString = process.env.HEROKU_POSTGRESQL_PURPLE_URL;
var client = new pg.Client(conString);
 
if(!client){
  console.log("Starting client to DB "+conString+ " failed")
}else{
  console.log("Started client to  DB"+client.host+"/"+client.database);
}
 
exports.client = client;
