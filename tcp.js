// require('http').createServer(function(req,res){
//   res.writeHead(200,{
//     'Content-Type':'text/html'
//   });
//   res.end('<h1>hello world!</h1>');
// }).listen(3000);
var count = 0;
var users={};
var net=require('net');
net.createServer(function(conn){
  var currentname;
  function broadcast(msg,exceptMy){
    for(var i in users){
      if(!exceptMy||i!=currentname){
        users[i].write(msg);
      }
    }
  }
  conn.setEncoding('utf8');
  conn.write('/033[92mwelcom new connect/033[39m'+'\n'+
  count+'this is other people connect\n'+'please write your name');
  count++;
  conn.on('close',function(){
    count--;
  });
  conn.on('data',function(data){
    data=data.replace('\r\n','');
    if(!currentname){
      if(users[data]){
        console.log('this name is all ready!!!')
      }else{
        currentname=data;
        users[currentname]=conn;
      }
    }else{
      // 视为为聊天消息
      broadcast(currentname+'  say  '+data+'!\n');
      // for(var i in users){
      //   //发给除自己以外的所有用户
      //   if(i!=currentname){
      //     users[i].write(currentname+'  say  '+data+'!\n');
      //   }
      // }
    }
    // console.log(data);
  })
}).listen(3000,function(){
  console.log('listen on 3000!')
});
