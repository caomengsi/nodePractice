var net=require('net');
var client = net.connect(6667, 'irc.freenode.net')
client.setEncoding('utf8')
client.on('connect',function(){
  client.write('NICK cms\r\n');
  client.write('USER cms 0 * :realname\r\n');
  client.write('JOIN #node.js\r\n');
})
