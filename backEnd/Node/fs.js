const fs = require('fs');

fs.readFile('new.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

fs.writeFile('create.txt','Hello i am created from node',(err)=>{
    if(err) throw err;
    console.log('file created');
});

fs.appendFile('new.txt',' Apend',(err)=>{
    if(err) throw err;
    console.log('file appended');
})