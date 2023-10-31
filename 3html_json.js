const express=require("express");

const app =express();
app.get('/',(req,res)=>{
    res.send("<h1>hii  i am from h1</h1>")
});

app.get('/about',(req,res)=>{
    res.send([
        {
            id:1,
            name:"myname"
        },
        {
            id:2,
            name:"myname2"
        }
    ]);
});

app.get('/temp',(req,res)=>{
    res.json([
        {
            add:"myaddress",
            loc:"mylocation"
        }
    ])
});

app.listen(8000,()=>{
    console.log("listen....")
});