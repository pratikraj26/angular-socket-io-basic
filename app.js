var express = require('express'),
		app = express(),
		server = require('http').createServer(app),
		io = require('socket.io').listen(server);

var config = {
	port: 1337
}

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname +'/public' });
});

server.listen(config.port, function(){
	console.log("Server listening on port " + config.port);
});


io.on('connection', function(client) {
  console.log('Client connected...');
  console.log(client.id);

  client.on('join', function(data) {
		console.log(data);
    client.emit('joinConfirm', 'Hello! From server.')
  });

});
