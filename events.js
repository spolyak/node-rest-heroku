//Events object 
function Events(){};
//exported through exports.Events
exports.Events = Events;
 
//DB client is passed and inititialized from outside...
exports.setAndConnectClient = function(_client){
  client = _client;  //assign it to the module's client var  
  client.connect();  //connect to DB...
}
 
//GET ALL EVENTS! 
Events.prototype.getAllEvents = function(callback){
   var allEvents = [];  
   var query =  client.query('SELECT * FROM event', function(err, result){
      allEvents = result.rows;
      //return an empty object if no events exist
      if(allEvents.length == 0) {
         callback([]); 
      }else callback(allEvents);
    });        
}