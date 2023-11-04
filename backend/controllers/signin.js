const User = require('../models/User')
const { sendMail } = require('./SendMail')
const bcrypt = require("bcrypt")
const mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();



async function InsertVerifyUser(name,email, password, ) {
    try {
        const salt = await bcrpt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password,salt);
        const token = generateToken(email);
        const newUser = new verifyUser({
            name: name,
            email: email,
            password: hasedPassword,
            token: token
        });

        const activationLink = `http://localhost:4010/${token}`
        const content = `<h4> hi, there </h4>
        <h5> Welcome to the app </h5>
        <p>Thank you for signing up. Click on the below link to activate</p>
        <a href="${activationLink}">click here </a>
        <p>Regards</p>
        <p>Team</p>
        `
        await newUser.save();
        sendMail(email, "VerifyUser", content)



    } catch (error) {
        console.log(error)
    }
}


function generateToken(email){
    const token = jwt.sign(email, process.env.signup_Secret_token);
    return token;
}

async function InsertSignUpUser(token){
    try {
        const userVerify = await VerifyUser.findOne({token: token});
        if(userVerify){
            const newUser = new User({
                name: userVerify.name,
                email: userVerify.email,
                password: userVerify.password,
                forgotPassword: {}
            })
            await newUser.save();
            await userVerify.deleteOne({token: token});
            const content = `<h4> Registration successful </h4>
            <h5> Welcome to the app </h5>
            <p>you are successfully registered</p>
            <a href="${activationLink}">click here </a>
            <p>Regards</p>
            <p>Team</p>`;
            sendMail(newUser.email, "Registeration successful", content);
            return `<h4> Registration successful </h4>
            <h5> Welcome to the app </h5>
            <p>you are successfully registered</p>
            <a href="${activationLink}">click here </a>
            <p>Regards</p>
            <p>Team</p>`;
        }
        return `<h4> Registration failed </h4>
            <a href="${activationLink}">click here </a>
            <p>Link expired</p>
            <p>Regards</p>
            <p>Team</p>`;
    } catch (error) {
        console.log('error',error);
        return `<html>
        <body>
        <h4>Registration failed</h4>
        <p>Unexpected error happend</p>
        <p>Regards</p>
        <p>Team</p>
        </body>
        </html>`;

    }
   
    
}

module.exports = {InsertVerifyUser, InsertSignUpUser};
