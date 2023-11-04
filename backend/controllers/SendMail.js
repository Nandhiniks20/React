const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gamil",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.nodemailer_user,
    pass: process.env.nodemailer_pass,
  },
});

function sendMail(toEmail, subject,content) {
    const mailOptions = {
        from:"nandhini20496@gmail.com",
        to:toEmail,
        subject:subject,
        html:content
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error) {
            console.log("error occured", error);
        }
        else{
            console.log("Email sent", info.response);
        }
    });
}
module.export= {sendMail};