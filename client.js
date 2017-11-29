// require('http').request({
//   host:'127.0.0.1',
//   port: 3000,
//   url:'/',
//   method: 'GET'
// },function(res){
//   var body='';
//   res.setEncoding('utf8');
//   res.on('data',function(chunk){
//     body+=chunk;
//   })
//   res.on('end',function(){
//     console.log('\n we got: \033[92m'+body+'\033[39m');
//   })
// }).end();
/**客户端发送表单**/

// var http=require('http'),
// qs=require('querystring');
// function send(theName){
//   http.request({
//     host:'127.0.0.1',
//     port: 3000,
//     url:'/',
//     method: 'POST'
//   },function(res){
//     var body="";
//
//     res.setEncoding('utf8');
//    console.log(222)
//    //  必须先监听 data   才能监听到end 很神奇 有木有
//      res.on('data',function(chunk){
//        body+=chunk;
//      })
//     res.on('end',function(){
//       console.log(111)
//       console.log('body',body)
//
//       console.log('\n  \033[92m'+'REQUST COMPLET!!'+'\033[39m');
//     })
//   }).end(qs.stringify({name:theName}));
//
// }
//
// process.stdout.write('\n enter your name:');
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data',function(name){
//   send(name.replace('\n',''))
// })

/**请求twiter**/
var http=require('http'),
qs=require('querystring');
var search = process.argv.slice(2).join(' ').trim();


http.request({
  host:'https://twitter.com',
  pathl:'/search?' + qs.stringify({q: search}),
  method: 'GET'
},function(res){
  var body='';
  res.setEncoding('utf8');
  res.on('data',function(chunk){
    body+=chunk;
  })
  res.on('end',function(){

    var obj = JSON.parse(body);
    obj.results.forEach(function(item){
      console.log('item', item);
    })
  })
}).end();
