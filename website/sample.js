var connect = require('connect'),
    serveStatic = require('serve-static');
var time=require('./time')


var app = connect();


app.use(time({time:500}));


app.use(function(req,res,next){
  console.log('a')
  if(req.url=="/a"){
    res.writeHead(200);
    res.end('fast')

  }else{
    next()
  }
})
app.use(function(req,res,next){
  console.log('b')
  if(req.url=="/b"){

    setTimeout(function(){
      res.writeHead(200);
      res.end('slow')

    },1000)

  }else{
    next()
  }
})

app.listen(5000);
