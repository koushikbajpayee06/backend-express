const express = require('express');

const app = express();

app.get("/getUserData",(req,res)=>{
    try{
        throw new Error("dugkdksb");
        res.send("User Data Send")
    }catch(err){
        res.status(500).send("Some Error contact support team");
    }
});

app.use('/',(err, req, res,next)=>{
    if(err){
        res.status(500).send("Somthing went wrong")
    }
})


app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


