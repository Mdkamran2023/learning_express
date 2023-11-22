const express=require('express');
const app=express();
const port=3000;

// used for template 
app.set("view engine","ejs");

// used for accessing static files
app.use(express.static("./public"));

app.get('/',(req,res)=>{
    // res.send('Hello World');
    res.render("index");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})