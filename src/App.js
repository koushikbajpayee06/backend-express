const express = require('express');
const connectDB =  require('./config/database');
const app = express();
const User = require("./models/user")



app.use(express.json());

app.post('/signup', async (req,res)=>{

    // console.log(req.body);
    // Creating a new instance of a User Model
    const user = new User(req.body);

    try{    
        await user.save();
         res.send("User added successfully")
    }catch(err){
        res.status(400).send("Error saving the user:" +err.message);
    }

});
// Get user by email
app.get('/user',async(req,res)=>{
    const userEmail = req.body.emailId;

    try{
         const user = await User.find({emailId: userEmail});
         res.send(user)
    }catch(error){
        res.status(400).send("Something went wrong",error.message)
    }

})
//  Feed API -GET /feed -get all the users from the database

app.get('/feed',(req, res)=>{
    
})



connectDB()
    .then(()=>{
        console.log("Database connection established...");
    app.listen(7777,()=>{
        console.log("server is succesfull listining on port 7777");
    })
})
    .catch(err=>{
        console.error("Database cant be connected:", err.message);
    
    })
