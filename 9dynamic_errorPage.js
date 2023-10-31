const express=require("express")

const app=express();

app.set("view engine","ejs");
app.set("views","9templateFile")
const obj={name:"ab",id:50}
app.get("/",(req,res)=>{
    res.render("index",obj);
});

app.get("/about",(req,res)=>{
    res.render("about",obj);
});


app.get("/about/*",(req,res)=>{
    res.render("404",{errormsg:"oops u are on wrong page"})
})
app.get("*",(req,res)=>{
    res.render("404",{errormsg:"page not found please try again"})
})

app.listen(9000,()=>{
    console.log("listing.....");
})