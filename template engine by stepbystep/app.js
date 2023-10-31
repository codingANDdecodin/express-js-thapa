const express=require("express");
const app=express();

// //for seingle content
// app.set("view engine","ejs")
// app.get("/profile/:name",(req,res)=>{
//     console.warn(req.params.name)
//     res.render("profile",{name:req.params.name});
// })

// app.listen(8000,()=>{
//     console.log("listen....");
// });
app.set("view engine","ejs");
app.get("/profile/:name",(req,res)=>{
    data={email:"ajjjjjjj@gmail.com",addr:"kh",skills:["cpp","js","java"]}
    res.render("profile",{
        name:req.params.name,
        data:data
    })
});

app.listen(9000,()=>{
    console.log("listning...");
})