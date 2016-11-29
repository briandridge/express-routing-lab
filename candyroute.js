var express = require('express');
var candyRouter = express.Router();
module.exports = candyRouter;
var candy = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}]
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// SHOW ok
candyRouter.get('/:id', function(req, res) {
	var showCandy = req.params.id;
	for (var i = 0; i < candy.length; i++) {
		if (candy[i].id == showCandy) {
			res.json(candy[i]);
		}
	}
	console.log("GET request to /candy/:id, this is the SHOW route");
});

candyRouter.get('/new', function(req, res) {
	console.log("GET request to /candy/new, this is the NEW route");
	res.send("ok");
});

// INDEX ok
candyRouter.get('/', function(req, res) {
  console.log("GET request to /candy, this is the INDEX route");
  res.send(candy);
});

candyRouter.post('/', function(req, res) {
  console.log("POST request to /candy, this is the CREATE route");
  res.send("ok");
});

candyRouter.get('/:id/edit', function(req, res) {
  console.log("GET request to /candy/:id/edit, this is the EDIT route");
  res.send("ok");
});

candyRouter.put('/:id', function(req, res) {
  console.log("PUT request to /candy/:id, this is the UPDATE route");
  res.send("ok");
});

candyRouter.delete('/:id', function(req, res) {
  console.log("DELETE request to /candy/:id, this is the DELETE route");
  res.send("ok");vv
});
