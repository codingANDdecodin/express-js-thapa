const express=require("express");

const app=express();


app.set("view engine","ejs");
app.set("views","8template");


const obj ={name:"ab",id:10}
app.get("/",(req,res)=>{
    res.render("index",obj);
});

app.get("/about",(req,res)=>{
    res.render("about",obj);
})


app.listen(8000,()=>{
    console.log("listening....");

})