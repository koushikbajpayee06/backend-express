
const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://admin:cjFdYrIjH1uPox2v@cluster0.awpuh.mongodb.net/devTinderRev"
    );
}

module.exports= connectDB;


