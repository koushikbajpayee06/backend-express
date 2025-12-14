const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const userRouter = express.Router();

// Get all the pending connection requests for the loggedIn User
userRouter.get("/user/requests", userAuth, async(req,res)=>{
    try{
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            toUserId :loggedInUser._id,
            status: "interested"
        }).populate("fromUserId",["firstName","lastName"]);

        res.json({
            message:"Data fetched successfully", 
            data:connectionRequests,
        })
    }catch(err){
        req.statusCode(400).send("ERROR: "+err.message);
    }

})
module.exports = userRouter;

