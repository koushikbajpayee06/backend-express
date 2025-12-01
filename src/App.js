const express = require('express');
const connectDB =  require('./config/database');
const app = express();
const User = require("./models/user")

app.post('/signup', async (req,res)=>{

    // Creating a new instance of a User Model
    const user = new User({
        firstName : "Virat",
        lastName : "Kohli",
        emailId: "vk18@gmail.com",
        password: "vk@123"
    });

    try{    
        await user.save();
         res.send("User added successfully")
    }catch(err){
        res.status(400).send("Error saving the user:" +err.message);
    }

});



connectDB()
    .then(()=>{
        console.log("Database connection established...");
    app.listen(7777,()=>{
        console.log("server is succesfull listining on port 7777");
    })
})
    .catch(err=>{
        console.error("Database cant be connected");
    
    })
