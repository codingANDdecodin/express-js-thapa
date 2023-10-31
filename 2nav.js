const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.send("i am from home page");

});

app.get('/about',(req,res)=>{
    res.send("i am from about page");

});

app.get('/temp',(req,res)=>{
    res.send("i am from temp page");

});
app.listen(8000,()=>{
    console.log("listening...")
})