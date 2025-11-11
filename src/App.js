const express = require('express');

const app = express();

app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send({firstName:"Koushik", lastName:"Bajpayee"});
});

app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


