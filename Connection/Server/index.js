const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
// const axios=require('axios');
const Thing =require('./models');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Mongo Connection
mongoose.connect('mongodb://127.0.0.1:27017/mwf_noon');
let db = mongoose.connection;

// 404
// app.all('*',(req,res)=>{
//     res.send('404 Page not found');
// })

app.get('/msgg',(req,res)=>{
    res.send(`{msg:'Hello How are you !',name:"Grras"}`);
});
app.post('/data',(req,res)=>{
    // res.send('Hello Data clicked')
    console.log('Data clicked');
    const uname=req.body.uname;
    // res.send(uname);
    // res.send('heya');
    // res.redirect('http://127.0.0.1:3000/welcome');
    let data={
        "UserName":uname
    }
    db.collection('react').insertOne(data,()=>{
    res.redirect('http://127.0.0.1:3000/welcome');
    })
});

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

app.post('/gdata',(req,res,next)=>{
    // const title=req.body.title;
    // const description=req.body.description;

    const thing = new Thing({
        title:req.body.title,
        description:req.body.description
    });

    // then -> True Portion
    // catch -> False Portion
    thing.save().then(
        ()=>{
            res.status(201).json({message:'Post Saved'});
            // Send Data in db
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error:'Schema not valied'
            });
        }
    )
});

app.listen(8081,(err)=>{console.log('Server start')});