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
        host: "mail.faithbreed.org",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'contact@faithbreed.org', // generated ethereal user
          pass: 'Kingdombreed_01' // generated ethereal password
        },

        tls:{
            rejectUnauthorized:false
        }
      });
    
      // send mail with defined transport object
      let infos =({
           
        from: '"Faitbreed.org 👻" <contact@faithbreed.org>', // sender address
        to: "skolly150@gmail.com, contact@faithbreed.org", // list of receivers
        subject: "Hello ✔", // Subject line
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