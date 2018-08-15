var People = require("../models/People");

var getAllCallback = (req, res) => {
    People.showAllCallback(function(people){
        res.send(people);
    });
}

var getAllPromise = (req, res) => {
    People.showAllPromise()
    .then(function(people) {
        res.send(people)
    });
}

var getAllAsync = async (req, res) => {
    res.send(await People.showAllAsync());
}

module.exports = {
    getAllCallback : getAllCallback,
    getAllPromise : getAllPromise,
    getAllAsync : getAllAsync
}