const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
require('dotenv').config(); 


const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD 
    }
})

const sendMail = (recipient, subject, text) => {
    
console.log(recipient)

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: recipient,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
};

module.exports = {
    sendMail
  }
  