//deploying a resturaunt booking app

console.log("linked");

//call in express
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//make app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var customer = [{
	customerName: "",
	phoneNum: "",
	email: "",
	id: ""
}]


//push out the number of tables to the html





//allow user to book a table and input name - takes in JSON input
app.post("/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var customer = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

//push names to html

//update number of tables

//