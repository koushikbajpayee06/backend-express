const express = require('express');

const app = express();

app.get(
    '/user',
    (req, res, next)=>{
        console.log("request handler-1")
        next()
    },
);
app.get(
    '/user',
    (req, res, next)=>{
    console.log("request handler-1")
    res.send("Response-2")
    }
);

app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


