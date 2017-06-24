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

//push out the number of tables to the html
var allTables = [

{	id: "table1",
	location: "Front - center",
	booked: false,
	bookedBy: null
},

{	id: "table2",
	location: "Front-Left",
	booked: false,
	bookedBy: null
	},

{	id:"table3",
	location: "front-right",
	booked: false,
	bookedBy: null
},

{   id:"table4",
	location: "back-Left",
	booked: false,
	bookedBy: null
},
{	id:"table5",
	location: "back-right",
	booked: false,
	bookedBy: null
}]

//allow user to book a table and input name 
var customers = {
	id: null,
	name: "test name"
};
//push names to html

//update number of tables

//SERVER PATHS
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
}); //this works 

app.get("/api/tables", function(req, res){
	console.log("api.tables");
	 for (var i = 0; i < allTables.length-1; i++) {
	 	if(allTables[i].booked === false){
	 		return res.json(allTables[i]);
	 	}
	 	else{
	 		return res.json(allTables[i].id + "is booked");
	 	}
	 }
}); //not linking 

app.post("/reservation", function(req, res){
	var customers = req.body;
	console.log(customers);

	 for (var i = 0; i < allTables.length; i++) {
	 	if(allTables[i].booked === false){
	 		return res.json(allTables[i]);
	 		var openTable = allTables[i];

	 	}
	 	else{
	 		return res.json(allTables[i].id + "is booked");
	 	}
	 	openTable.bookedBy = customers.id;
	 }
}); //not linking



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

