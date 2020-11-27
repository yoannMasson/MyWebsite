const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('dist'));
router.get('/',function(req,res){
  res.sendFile('/index.html');
});

/* TO DO Mail Service
router.get('/mail', function(req, res){
  console.log("ici");
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yoann.masson95@gmail.com',
      pass: '*********'
    }
  });

  var mailOptions = {
    from: 'yoann.masson95@gmail.com',
    to: 'yoann.masson95@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('mail sent');
}); */

module.exports = app;