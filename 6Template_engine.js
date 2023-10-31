const express=require("express");
const app=express();


app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("template_engine");
});

app.listen(9000,()=>{
    console.log("listen..");
})