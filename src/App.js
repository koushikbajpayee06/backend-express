const express = require('express');

const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"Koushik", lastName:"Bajpayee"});
});

app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


