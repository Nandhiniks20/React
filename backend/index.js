const express = require('express');
const connectDb = require("./db");
const cors = require("cors")
var app = express();

var signinRouter = require('./routes/signin');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');

const port = 4010;
app.use(express.json());
app.use(cors({origin:"*"}))
connectDb();


 app.get("/", (req, res) => {
    res.send("hello world")
 });

 app.use("/signin", signinRouter);
 app.use("/login", loginRouter);
 app.use("/home", homeRouter);
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})