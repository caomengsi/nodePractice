var fs = require("fs");
// console.log(require('fs').readdirSync(__dirname))
// var http=require('http');
// function asyn(err,files){
//   console.log(files);
// }
// require('fs').readdirSync('.',asyn);
// process.stdout.write('hello world');

fs.readdir(process.cwd(), function(err, files) {
  function read(){
    console.log(" ");
    process.stdout.write("\033[31m enter your choice!\033[39m\n");
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.on('data',option)
  }
  function option(data){
    var fileName=files[Number(data)];

    if(!fileName){
        process.stdout.write("\033[31m enter your choice!\033[39m\n");
    }else{
      console.log('fileName', fileName);
      process.stdin.pause();
      fs.readFile(__dirname+'/'+fileName,'utf8',function(err,data){
        console.log(" ");
        console.log('\033[31m'+data.replace(/(.*)/g,'$1')+'\033[39m\n');
      })
    }
  }
  // console.log(" ");
  console.log(files);
  if (!files.length) {
    return console.log(" \033[31m no files to show!\033[39m\n");
  }
  console.log(" select file you want to see!\n");
  function getFiles(i) {
    console.log('get', i);
    var fileName = files[i];
    fs.stat(__dirname + "/" + fileName, function(err, stat) {
      if (stat.isDirectory()) {
        console.log(" \033[36m" + i + fileName + "\033[39m\n");
      } else {
        //ss
        console.log(" \033[90m" + i + fileName + "\033[39m\n");
      }
      i++;
      if (i == files.length) {
        // console.log(" ");
        // process.stdout.write("\033[31m enter your choice!\033[39m\n");
        // process.stdin.resume();
        // process.stdin.setEncoding("utf8");
        read();
      } else {
        getFiles(i);
        console.log(i);
      }
    });


  }
  getFiles(0);
});
