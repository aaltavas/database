var express = require('express');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express(); 

var obj;
fs.readFile('some_name.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

app.get('/:some_name', function(req, res) {
 	res.send(obj);
});

app.use(bodyParser.json());

app.post('/:some_name', function(req, res) {
	var text = req.body;
	fs.writeFile('text.json', text, function (err) {
		if (err) throw err;
	})
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('the server is listening on port 3000');
});