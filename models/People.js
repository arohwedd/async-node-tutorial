var mongoClient =  require("../DB/mongoClient");

var showAllCallback = function(callback) {
    
    var people = [];

    mongoClient.connect(function(err, client) {
        
        var db = client.db("async_tutorial");
    
        db.collection("people").find().toArray(function(err, arr) {
            people = arr;

            mongoClient.close();

            callback(people);
        });
    });
}

var showAllPromise = function(){
    return new Promise(function(resolve, reject) {
        mongoClient.connect(function(err, client) {
            var db = client.db("async_tutorial");
            
            db.collection("people").find().toArray(function(err, people) {

                mongoClient.close();
                return resolve(people);
            });
        })
    });
}

var showAllAsync = function(){
    return new Promise(function(resolve, reject) {
        mongoClient.connect(function(err, client) {
            var db = client.db("async_tutorial");
            
            db.collection("people").find().toArray(function(err, people) {

                mongoClient.close();
                return resolve(people);
            });
        })
    });
}

module.exports = {
    showAllCallback : showAllCallback,
    showAllPromise : showAllPromise,
    showAllAsync : showAllAsync
}