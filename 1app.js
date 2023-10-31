const express=require("express");
const app=express();

app.get("/",(req,res)=>{                        //(route,callback)
    res.send("hello word from express js");
});

app.get("/about",(req,res)=>[
    res.send("i am from about")
])

app.listen(8000,()=>{
    console.log("data  listen on port 8000")
})