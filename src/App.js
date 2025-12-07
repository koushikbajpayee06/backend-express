const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const {validationSignUpData} = require('./utills/validation');
const bcrypt = require("bcrypt")
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cookieParser())

app.post("/signup", async (req, res) => {
  try {
    
    validationSignUpData(req);
    const {firstName, lastName, emailId, password}= req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password:passwordHash,
    });
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR  :" + err.message);
  }
});

app.post('/login', async(req,res)=>{
  try{
    const {emailId, password} = req.body;
    const user = await User.findOne({emailId:emailId})
    if(!user){
      throw new Error("Invalid Credentials")
    }

    const isPasswordValid = await bcrypt.compare(password,  user.password);
    if(isPasswordValid){
      // Create a jwt token
      const token = jwt.sign({ _id:user._id }, 'DEV@Tinder$790');
      // console.log(token);
      // Add the token to cookie
      res.cookie("token",token);
      res.send("Login Successful!!!!")
    }else{
      throw new Error("Invalid Credentials");
    }
  }catch(err){
    res.status(404).send("ERROR "+ err.message)
  }
});

app.post('/profile', async(req,res)=>{
  const cookies = req.cookies;
  const { token } = cookies;
  // console.log(cookies);
  // Validate my token
  const decodedMessage = await jwt.verify(token,"DEV@Tinder$790",)
  // console.log(decodedMessage);
  const {_id} = decodedMessage
  console.log("Logged in user is: "+_id);

  const user = await User.findById(_id)

  res.send(user);
})

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    //  const user = await User.find({emailId: userEmail});
    const user = await User.findOne({ emailId: userEmail });
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong", error.message);
  }
});

// Feed API - GET/feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("user not found");
    }
    res.send(users);
  } catch (error) {
    res.status(400).send("Somthing went wrong", error.message);
  }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
  // console.log(req.body)
  const userId = req.body.userId;
  // console.log(userId);
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleated successfully");
  } catch (error) {
    res.status(404).send("Unable to delete", error.message);
  }
});

// Update data of the user
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  console.log(userId)
  const data = req.body;
  // console.log(isUpdateAllowed)
  // console.log(data);
  try {
    const ALLOWED_UPDATE = [
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];
    const isUpdateAllowed = Object.keys(data).every((e) =>
      ALLOWED_UPDATE.includes(e)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed")
    }

    if(data?.skills.length > 10){
        throw new Error("Skills can't be more than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    // console.log(user)
    res.send("User updated successfully");
  } catch (err) {
    res.status(404).send("Update Failed:"+ err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("server is succesfull listining on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cant be connected:", err.message);
  });
