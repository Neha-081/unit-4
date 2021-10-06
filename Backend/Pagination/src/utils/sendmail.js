const transporter = require ("../configs/mail")

 function sendMail (from , to, subject, text, html) {
    var message = {
        from: from ,
        to: to,
        subject:subject,
        text: text,
        html: html
      };
    
      transporter.sendMail(message)
};

module.exports = sendMail;