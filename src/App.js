const express = require('express');

const app = express();

app.get("/user/:userId",(req,res)=>{
    // console.log(req.query);
    console.log(req.params)
    res.send({firstName:"Koushik", lastName:"Bajpayee"});
});

app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


