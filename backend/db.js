const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MongoDb_url)
        console.log("connected to mongodb")
    }catch(e){
        console.log('error', e)
    }
}
module.exports = connectDB;