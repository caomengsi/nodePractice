
// 参考地址 http://blog.fens.me/nodejs-websocket/
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
  var express=require('express');

server.listen(3000);

app.use(express.static('public'));

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
