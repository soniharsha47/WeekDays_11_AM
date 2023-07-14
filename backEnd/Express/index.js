const express=require('express');
const app=express();
const bodyParser=require('body-parser');


// Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// GET API -> Request and response
app.get('/',(req,res)=>{
    // res.send('Hello World');
    res.status(504).sendFile(__dirname+'/index.html');
});

app.get('/help',(req,res)=>{
    res.send('help page');
});

// Routing Parameters
app.get('/account/id/:id/uname/:name',(req,res)=>{
    // res.send('Hello MR/Miss : '+req.params.name);
    if(req.params.name=='Grras'){
        res.status(200).send('Hello : '+req.params.name);
    }
    else{
        res.status(404).send('Invalid name');
    }
});

// GEt API
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/registration.html');
})

// POST API - exchange the data 
app.post('/userregister',(req,res)=>{
    const uname=req.body.name;
    res.send(uname);
    // res.redirect('/register');
    // if(uname=='Grras'){
    //     res.redirect('/')
    // }
    // else{
    //     res.redirect('/register');
    // }
    
});

app.listen(5236,(err)=>{
    console.log('server Start');
});