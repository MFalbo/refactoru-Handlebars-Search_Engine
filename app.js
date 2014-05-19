var express = require('express');
var bodyParser = require('body-parser');
var data = require('./search-data.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/search', function(req,res){
	// console.log(req.body.results);
	if(data.programming[req.body.results]){
		res.send(data.programming[req.body.results]);
	}
	else{
		res.send(data['search engines'][req.body.results]);
	}
});

var server = app.listen(4109, function() {
	console.log('Express server listening on port ' + server.address().port);
});
