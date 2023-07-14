const http=require('http');
const fs=require('fs');
// http.createServer().listen(port);
http.createServer((req,res)=>{
    console.log(req.url);
    // res.write('HEllo World!!!!');
    // res.end();
    if(req.url=='/'){
        // res.write('Index page here');
        // res.end();
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.end(data);
        })
    }
    else if(req.url=='/about'){
        fs.readFile('aboutus.html','utf-8',(err,data)=>{
            res.end(data);
        })
    }
    else{
        res.write('404 Page not found');
        res.end();
    }

}).listen(5623,(err)=>{
    console.log('server start');
});