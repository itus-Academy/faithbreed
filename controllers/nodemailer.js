var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
router.post('/', (req,res)=>{
    console.log(req.body.contactName)

    const output = `
        <p> You have a new contact request </p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name:  ${ req.body.contactName}  </li>
            <li>Email:   ${req.body.contactEmail} </li>
            <li>phone:   ${req.body.contactNumber } </li>
            <li>Message:  ${ req.body.contactMessage} </li>

        </ul>
    `;

    let transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'info@faithbreed.org', // generated ethereal user
          pass: 'Kingdombreed_01' // generated ethereal password
        },

        tls:{
            rejectUnauthorized:false
        }
      });
    
      // send mail with defined transport object
      let infos =({
           
        from: '"Faithbreed.org 👻" <info@faithbreed.org>', // sender address
        to: "skolly150@gmail.com, info@faithbreed.org,faithbreed.cc@gmail.com", // list of receivers
        subject: "FEEDBACK MESSAGES (Contact Us)  ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body 
      });


      transporter.sendMail(infos, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        console.log("Message sent: %s", info.messageId);
        res.redirect('/contact')
    });
    
      



      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account


    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));



      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    

   
)





module.exports = router;