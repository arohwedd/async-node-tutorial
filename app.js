var express = require("express");
var app = express();

var peopleController = require("./controllers/people");

app.get("/people/callback", peopleController.getAllCallback);
app.get("/people/promise", peopleController.getAllPromise);
app.get("/people/async", peopleController.getAllAsync);

app.listen(3000, function(){
    console.log("app started!");
})






