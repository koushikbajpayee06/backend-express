const express = require('express');

const app = express();

app.use(
    '/user',
    (req, res, next)=>{
    next();
    console.log("request handler-1")
    // res.send("Response-1!! ");
},
    (req, res, next)=>{
        console.log("Route Handler-2");
        // res.send("Response-2!!");
        next()
    }
,
    (req, res, next)=>{
        console.log("Route Handler-3");
        // res.send("Response-3!!");
        next()
    }
,
    (req, res, next)=>{
        console.log("Route Handler-4");
        // res.send("Response-4!!");
        next()
    }
);

app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


