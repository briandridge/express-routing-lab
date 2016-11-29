var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var candyRouter = require('./candyroute');
app.use('/candy', candyRouter);
app.listen(port);
// var body = require("body-parser");
// app.use(bodyParser.json());

