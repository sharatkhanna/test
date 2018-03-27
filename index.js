//console.log('Hello World......')


var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
	res.send('built this from scratch')
});

app.get('/first-page', function(req, res){
	res.sendFile(path.join(__dirname, 'firstpage.html'))
});


app.listen(4000, function(){
	console.log('Server started on port 4000.....')
});
