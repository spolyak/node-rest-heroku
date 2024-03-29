//Define the port to listen to
var PORT = process.env.PORT || 1983;
//Include retify.js framework
var restify = require('restify');
 
var options = {
  serverName: 'My server',
  accept: [ 'application/json' ]
}
 
//Create the server
var server = restify.createServer(options);
 
//Use bodyParser to read the body of incoming requests
server.use(restify.bodyParser({ mapParams: false }));
 
server.listen(PORT, '0.0.0.0');
console.log("listening "+PORT);
 
//Include db_conn file
var db_conn = require('./db_conn');
 
//IMPORT RESOURCES
var eventsResource = require('./events');
eventsResource.setAndConnectClient(db_conn.client);
 
//DEFINE THE URIs THE SERVER IS RESPONDING TO
server.get('/events', function(req, res) {
   
  var events = new eventsResource.Events() ;
   
  //Get all events from DB
  events.getAllEvents(function(result){
     
    var allEvents = result;
 
    //If no events exist return 200 and and empty JSON
    if(allEvents.length == 0) {
      res.send(200, []);
      return;
    }else res.send(200, result);
  });    
 
});