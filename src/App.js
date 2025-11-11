const express = require('express');

const app = express();

app.use("/user",(req,res)=>{
    res.send("HAHAHHAHAHAHAHHAHA");
})

app.get("/user",(req,res)=>{
    res.send({firstName:"Koushik", lastName:"Bajpayee"});
});

app.post("/user",(req,res)=>{
    console.log("Save data to database");
    res.send("Data Successfully saved in database");
});

app.delete('/user',(req,res)=>{
    console.log("data deleted");
    res.send("data deleted successfully")
})
app.use("/test",(req,res)=>{
    res.send("Hello from the server...");
});


app.listen(7777,()=>{
    console.log("server is succesfull listining on port 7777");
});


