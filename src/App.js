const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // Creating a new instance of a User Model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
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

//  Feed API -GET /feed -get all the users from the database
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
