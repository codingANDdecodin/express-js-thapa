const express=require("express");
const path=require("path");
const app=express();

app.set("view engine","ejs");
app.set("views","10ejs_files");

 app.use("/about",express.static("./10ejs_files"));

app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(8000,(req,res)=>{
    console.log("listing....")
});