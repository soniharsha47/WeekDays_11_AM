const bodyParser = require('body-parser');
const express=require('express');
const mongoose = require('mongoose');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Connect the mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mwf_noon');
var db=mongoose.connection;
db.once("open",function(){console.log('Db connected')});

// Routing 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})
app.get('/welcome',(req,res)=>{
    res.sendFile(__dirname+'/welcome.html');
});

// POST API 
app.post('/usreRegister',(req,res)=>{
    var uname=req.body.uname;
    var gender=req.body.gender;
    var email=req.body.umail;
    var passww=req.body.upassw;

    // Convert data into JSON Formate
    var data={
        "UserName":uname,
        "Gender":gender,
        "UserEmail" : email,
        "UserPassword ": passww
    };

    // Send Data into the DBMS-> express collection
    // Fetch the collection and pass the query
    db.collection('express').insertOne(data,(err)=>{
        if(err) throw err;
        res.redirect('/welcome');
    });

    });

// Login get api
app.post('/userlogin',async(req,res)=>{
    let umail=req.body.umail;
    let passw=req.body.passw;

    // Fetch collection and store in variable
    const collectionn =db.collection("express");
    
    // Check the email is available in document or not? If availale then store that document in one object
    var user=await collectionn.findOne({"UserEmail":umail});
    // console.log(user);
    // Try : Where you think that  it carries an error
    try{
        // console.log(user.UserPassword==passw);
        if(user["UserPassword"]==passw){
            res.redirect('/welcome');
        }
        else{
            res.sendFile(__dirname+"/wrongPasswd.html") ;
        }
    }
    // Catch : how to show the customerise error
    catch{
        res.sendFile(__dirname+'/userNotFoundErr.html');
    }

});


app.listen(8563,()=>{console.log('start')});