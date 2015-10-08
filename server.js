var express = require('express');
var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public')); //__dirname is the root to the file

app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});