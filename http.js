// require('http').createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'image/png'});
//   res.write('hello');
//   setTimeout(function(){
//     res.end('word');
//   },1000)
// }).listen(3000);
/**创建一个简单的服务器**/
// require('http').createServer(function(req,res){
//   res.writeHead(200);
//   res.end('hello world');
// }).listen(3000);

/**使用stream**/
// require('http').createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'image/png'});
//   var stream = require('fs').createReadStream('pubsub.png');
//   stream.on('data',function(data){
//     res.write(data);
//   })
//  stream.on('end',function(){
//    res.end();
//  })
// }).listen(3000);
/**使用pip**/
// require('http').createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'image/png'});
//   require('fs').createReadStream('pubsub.png').pipe(res);
//
// }).listen(3000);
/**创建一个web服务器**/
// var qs = require('querystring');
// require('http').createServer(function(req,res){
//   if(req.url=='/'){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end(['<form method="post" action="/url">',
//     '<h1> hello,my form</h1>','<input type="text" name="name">',
//     '<button>submit</button>','</form>'].join(''));
//   }else if(req.url=='/url'&& req.method=='POST'){
//     console.log(11);
//
//     var body='';
//     req.on('data',function(chunk){
//       console.log(22);
//       body+=chunk;
//       console.log(body);
//     })
//     req.on('end',function(){
//       res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('you send a'+req.headers['content-type']+'message'+qs.parse(body).name);
//     })
//
//   } else{
//     res.writeHead(404);
//     res.end('not found');
//   }
//
// }).listen(3000);

/**服务端处理表单**/
// var qs = require('querystring');
// require('http').createServer(function(req,res){
//     var body='';
//     req.on('data',function(chunk){
//       // console.log(22);
//       body+=chunk;
//       // console.log(body);
//     })
//     req.on('end',function(){
//       res.writeHead(200);
//         res.end('done');
//         console.log('end')
//         console.log(qs.parse(body).name)
//     })
//
// }).listen(3000);
/**使用up监听**/
modules.exports=require('http').createServer(function(req,res){
  res.writeHead(200);
  res.end('hello world');
})
