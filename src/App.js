const express = require('express');

const app = express();

app.get("/getUserData",(req,res)=>{

    throw new Error("abcde");
    res.send("User Data Send");
});

app.use('/',(err, req, res,next)=>{
    if(err){
        res.status(500).send("Somthing went wrong")
    }
})


app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


