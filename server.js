var traverson = require('traverson');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var mongoose = require('mongoose');
var config = require('./config');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Artist = require('./models/artist');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

// Mongoose (db)
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// ******* NEXT STEP: GET THE API FOR ARTSY.NET WORKING.
// Sample API Call
// var xappToken = 'JvTPWe4WsQO-xqX6Bts49tkPz6Yp2EsehxIRkiGsnYTgt7VGMJVnJO3PgMx37hhywDZRQS0OsFctUz5X0bmN41BA9PTu_NyZ086-707bq7yp3wmfSvWb1FJfy_GZQR5WLVLbyzBiM58207VdPM50k3bVOCkxWiweqM5T77i9S4SFBCpVGGPYqFebS-P3gvAgsZ72gK3KD4ofoXT90M5ottSyaMVs_mCmj_gz-e16aHA=',
//     api = traverson.json.from('https://api.artsy.net/api');

// api.newRequest()
//   .follow('artist')
//   .withRequestOptions({
//     headers: {
//       'X-Xapp-Token': xappToken,
//       'Accept': 'application/vnd.artsy-v2+json'
//     }
//   })
//   .withTemplateParameters({ id: 'andy-warhol' })
//   .getResource(function(error, andyWarhol) {
//     console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
//   });

// Socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

