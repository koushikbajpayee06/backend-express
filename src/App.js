const express = require('express');

const app = express();
app.use("/admin",(req, res, next)=>{
    console.log("Admin auth is getting Checked!!!!");
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
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


