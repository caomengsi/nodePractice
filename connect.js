/**创建一个web服务器**/
var fs = require('fs');
require('http').createServer(function(req,res){
  if(req.method=='GET' && req.url=='/'){
    serve(__dirname+'/index.html','text/html')
  }else if(req.url.substr(0,7)=='/images'&& req.method=='POST'){
    console.log(11);
    fs.stat(__dirname+req.url, function(err,stat){
      if(err || !!stat.isFile) {
      res.writeHead(404);
      res.end('not found');
      return;
      }
      serve(__dirname+req.url,,'application/jpg')
    })

    var body='';
    req.on('data',function(chunk){
      console.log(22);
      body+=chunk;
      console.log(body);
    })
    req.on('end',function(){
      res.writeHead(200,{'Content-Type':'text/html'});
        res.end('you send a'+req.headers['content-type']+'message'+qs.parse(body).name);
    })

  } else{
    res.writeHead(404);
    res.end('not found');
  }

  function serve(path,type){
    res.writeHead(200,{'Content-Type':type});
    fs.createReadStream(path).pipe(res);
  }

}).listen(3000);
