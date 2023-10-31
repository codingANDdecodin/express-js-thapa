const express=require("express");
const path =require("path")



const app=express();

const staticPath=path.join(__dirname,"./4public");

app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.write("hii only");
    
})



app.listen(8000,()=>{
    console.log("listning........"); 
})

 console.log(staticPath)

