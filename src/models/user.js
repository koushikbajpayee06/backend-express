
const mongoose = require('mongoose');

const userSchma = mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength: 4,
        maxLength:50,
    },
    lastName:{
        type:String,
        required: true,
    },
    emailId:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!['male','female','others'].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl:{
        type: String,
        default:"https://www.fenae.org.br/portal/lumis-theme/br/org/fenae/portal/theme/fenae-portal/img/dummy-picture.png"
    },
    about:{
        type:String,
        default:"This is a default about of the user!"
    },
    skills:{
        type:[String],
    }
});

module.exports = mongoose.model("User",userSchma);