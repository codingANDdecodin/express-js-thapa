const express=require("express");
const path=require("path");

const app=express();

app.set("view engine","ejs");
app.set("views","7myTemplate");


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