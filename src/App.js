const express = require('express');
const connectDB =  require('./config/database');
const app = express();



connectDB().then(()=>{
    console.log("Database connection established...");
    app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});
}).catch(err=>{
    console.error("Database cant be connected");
})
