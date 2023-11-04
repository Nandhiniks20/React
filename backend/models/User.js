const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true
        },
        joinedOn:{
            type:Date,
            default:Date.now()
        },
        forgotPassword:{
            time:Date,
            otp:String,
        },
        token:{
            type:String,
            required:true
        },
    },{
        collection: "VerifyUser"
    }
);
module.exports=mongoose.model("User", userSchema);