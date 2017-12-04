 /**创建一个web服务器**/
// var fs = require('fs');
// require('http').createServer(function(req,res){
//   if(req.method=='GET' && req.url=='/'){
//     serve(__dirname+'/index.html','text/html')
//   }else if(req.url.substr(0,7)=='/images'&& req.method=='GET'){
//     console.log(11);
//     fs.stat(__dirname+req.url, function(err,stat){
//       console.log(__dirname+req.url);
//       if(err || !stat.isFile) {
//       res.writeHead(404);
//       res.end('not found');
//       return;
//       }
//       serve(__dirname+req.url,'application/jpg')
//     })
//   } else{
//     res.writeHead(404);
//     res.end('not found');
//   }
//
//   function serve(path,type){
//     res.writeHead(200,{'Content-Type':type});
//     fs.createReadStream(path).pipe(res);
//   }
//
// }).listen(3000);
 /**使用connect**/

// var connect = require('connect'),
//     serveStatic = require('serve-static');
//   var fs = require('fs');
//   var logger = require('morgan');
//   var bodyParser = require('body-parser');
//
//
//
//
// var app = connect();
// // app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.use(serveStatic(__dirname));
// app.use(function(req,res,next){
//   console.log(1)
//   console.log('uel', req.url)
//   next();
// })
// app.use(function(req,res,next){
//   console.log(2);
//   function serve(path,type){
//           res.writeHead(200,{'Content-Type':type});
//           fs.createReadStream(path).pipe(res);
//         }
//  if(req.url.substr(0,7)=='/images'&& req.method=='GET'){
//
//       fs.stat(__dirname+req.url, function(err,stat){
//         console.log(__dirname+req.url);
//         // if(err || !stat.isFile) {
//         // res.writeHead(404);
//         // res.end('not found');
//         // return;
//         // }
//         serve(__dirname+req.url,'application/jpg')
//       })
//
//     } else{
//       next();
//
//     }
//
// })
// app.use(function(req,res,next){
//   console.log(3)
//   function serve(path,type){
//           res.writeHead(200,{'Content-Type':type});
//           fs.createReadStream(path).pipe(res);
//         }
//     if(req.method=='GET' && req.url=='/'){
//       console.log(3)
//       serve(__dirname+'/index.html','text/html')
//     } else{
//       next();
//     }
//
// })
// app.use(function(req,res,next){
//   if(req.method=='POST' && req.url=='/'){
//     console.log('server')
//     console.log(req.body)
//     console.log(req.body.name)
//     res.writeHead(200);
//     res.end('get data');
//
//   }
// })
//
// app.use(logger(':response-time ms'))
// app.use(function(req,res,next){
//   console.log(111)
//   res.writeHead(404);
//     res.end('not found');
// })
// app.listen(5000);

/**创建一个web服务器**/
// var fs = require('fs');
// require('http').createServer(function(req,res){
//   if(req.method=='GET' && req.url=='/'){
//     serve(__dirname+'/index.html','text/html')
//   }else if(req.url.substr(0,7)=='/images'&& req.method=='GET'){
//     console.log(11);
//     fs.stat(__dirname+req.url, function(err,stat){
//       console.log(__dirname+req.url);
//       if(err || !stat.isFile) {
//       res.writeHead(404);
//       res.end('not found');
//       return;
//       }
//       serve(__dirname+req.url,'application/jpg')
//     })
//   } else{
//     res.writeHead(404);
//     res.end('not found');
//   }
//
//   function serve(path,type){
//     res.writeHead(200,{'Content-Type':type});
//     fs.createReadStream(path).pipe(res);
//   }
//
// }).listen(3000);
/**使用connect**/

var connect = require('connect'),
   serveStatic = require('serve-static');
 var fs = require('fs');
 var logger = require('morgan');
 var bodyParser = require('body-parser');




var app = connect();
app.use(serveStatic('static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
 if(req.method=='POST' && req.url=='/'){
   console.log('server')
console.log(req.body)
   console.log(req.body.file)
   res.writeHead(200);
   res.end('get data');
 }
})
//
app.listen(5000);
