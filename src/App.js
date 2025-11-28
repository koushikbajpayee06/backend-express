const express = require('express');

const app = express();

const { adminAuth,userAuth } = require("./middlewares/auth");


app.use('/admin',adminAuth);


app.get('/user',userAuth, (req, res, next)=>{
    res.send("All Data Sent");
});
app.get('/admin/getAllData',(req, res, next)=>{
    res.send("All Data Sent");
});

app.get('/admin/updateAllData',(req, res, next)=>{
    res.send("Update an User");
});

app.get('/admin/deleteAllData',(req, res, next)=>{
    res.send("Deleted an user");
});



app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


