var express = require('express');
// var app = express();
var bodyParser = require('body-parser');
var candyRouter = express.Router();
var candy = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];
// app.use(bodyParser.json());

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

// candyRouter.get('/new', function(req, res) {
// 	console.log("GET request to /candy/new, this is the NEW route");
// 	res.send("ok");
// });

// INDEX ok
candyRouter.get('/', function(req, res) {
  console.log("GET request to /candy, this is the INDEX route");
  res.send(candy);
});

// POST how to use postman?
candyRouter.post('/', function(req, res) {
	req.body.id = candy.length + 1;
	candy.push(req.body);
	res.json(req.body);
  	console.log("POST request to /candy, this is the CREATE route");
});

// candyRouter.get('/:id/edit', function(req, res) {
//   console.log("GET request to /candy/:id/edit, this is the EDIT route");
//   res.send("ok");
// });

// candyRouter.put('/:id', function(req, res) {
//   console.log("PUT request to /candy/:id, this is the UPDATE route");
//   res.send("ok");
// });

// DELETE ok
candyRouter.delete('/:id', function(req, res) {
	var deleteCandy = req.params.id;
	for (var i = 0; i < candy.length; i++) {
		if (candy[i].id == deleteCandy) {
			res.json(candy.splice(i, 1));
		}
	}res.json(candy);
});

module.exports = candyRouter;
