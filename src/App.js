const express = require('express');

const app = express();

app.use('/',(err, req, res,next)=>{
    if(err){
        res.status(500).send("Somthing went wrong")
    }
})

app.get("/getUserData",(req,res)=>{
    throw new Error(" koushik");
    res.send("User Data Send")
    
});

app.use('/',(err, req, res,next)=>{
    if(err){
        res.status(500).send("Somthing went wrong-2")
    }
})


app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


