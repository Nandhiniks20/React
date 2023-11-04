const redis = require('redis');

const dotenv = require("dotenv");
dotenv.config();

const redisClient = () =>{
    return redis.createClient();
}


const client = redisClient();

client.on('error', (err)=>{
    console.error(err)
});


client.on('connect', ()=>{
    console.error("connected to redis")
});


client.on('end', ()=>{
    console.error("redis connected ended")
});

client.on('SIGQUIT', ()=>{

    client.quit();
});

module.exports = client;
