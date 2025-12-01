
const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://namastedev:fsmtGY1IfU6h4Ypp@namastenode.uwpmhgp.mongodb.net/revDevTinder"
    );
}

connectDB().then(()=>{
    console.log("Database connection established...")
}).catch(err=>{
    console.error("Database cant be connected");
})
