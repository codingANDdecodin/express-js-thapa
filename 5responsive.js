const express=require("express")
const app=express();
const path=require("path")
//there is nothing in this progrram
const staticPath=path.join(__dirname,"./4public");

console.log(staticPath);
app.use(express.static(staticPath));    //accept "path " as argument and we can acceess files from that path
app.get('/',(req,res)=>{
    res.write("hello from express server...");
    res.send("Dont have any code for responsive webpage using exprss")
});

app.listen(8000,()=>{
    console.log("listining.....");
})