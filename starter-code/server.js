var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var candyRouter = require('./candyroute');
app.use(bodyParser.json());
app.use('/candy', candyRouter);
app.listen(port);

