const nodemailer = require('nodemailer');


const emailSender = (reciepient, user, code) => {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emmanuelokezie50@gmail.com',
    pass: process.env.GMAIL_CODE
  }
});

var mailOptions = {
  from: 'emmanuelokezie50@gmail.com',
  to: reciepient,
  subject: "User Veification",
  html: `<div style="color:red;width:50%;margin:10px auto">
  <h1>Please click the link below to confirm yoour accoount ${user}' </h1>
  <a href='${code}' style='background-color:green;color:white;padding:4px;border-radius:8px;'>Verify</a>
  <p>${code}</p>
  </div>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

module.exports = emailSender;