// console.log(process.argv);
// console.log(process.cwd());
// process.exit(1);
// console.log(process.env.SHELL);
var fs=require('fs');
// var stream=fs.createReadStream('./index.js');
// stream.on('data',function(chunk){
//   console.log(chunk);
// })
// stream.on('end',function(chunk){
//   console.log('end', chunk);
// })
files=fs.readdirSync(process.cwd());
files.forEach((item)=>{
  if(/\.js/.test(item)){
    fs.watchFile(process.cwd()+'/'+item,function(){
      console.log('file changes');
    })
  }
})
