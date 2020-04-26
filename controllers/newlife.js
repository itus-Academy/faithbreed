var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Newlife = require('../model/newlife.js')


router.post('/', (req,res)=>{
    // console.log(req.body.contactName)
    // res.send('i can go anywhere');

    


    const output = `
        <p> Hello Faithbreed Admin, you have just received a form input from a new member who just got a NEW LIFE </p>
        <h3>The table below shows the contact details</h3>
        
        <table border ="1" cell-padding="2" >
            <tr>
                <td>Date:<td>
                <td>${ req.body.date}<td>
            </tr>
             <tr>
                <td>Full Name:<td>
                <td>${ req.body.fullname}<td>
            </tr>
             <tr>
                <td>Gender:<td>
                <td>${ req.body.gender}<td>
            </tr>
            <tr>
                <td>BirthDate:<td>
                <td>${ req.body.birthdate}<td>
            </tr>
            <tr>
                <td>Phone Number:<td>
                <td>${ req.body.phone}<td>
            </tr>
            <tr>
                <td>Email:<td>
                <td>${ req.body.email}<td>
            </tr>
            <tr>
                <td>Which Applies to you:<td>
                <td>${ req.body.exampleRadios}<td>
            </tr>
            <tr>
                <td>Where did you pray the salvation Prayer:<td>
                <td>${ req.body.exampleRadiosi}<td>
            </tr>
        </table>

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
        subject: "NEW LIFE FEEDBACK FORM ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body 
      });


      transporter.sendMail(infos, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        console.log("Message sent: %s", info.messageId);
       
    });

    const newlife = new Newlife({
        date : req.body.date,

        name : req.body.fullname,

        gender : req.body.gender,

        birthDate : req.body.birthDate,

        phone : req.body.phone,

        email : req.body.email,

        application : req.body.exampleRadios,

        prayerChannel : req.body.exampleRadiosi
    }).save((err,newlife)=>{
        if(err){
            console.log('error')
        }else{
            res.redirect('/newlife')
        }

    });
    
      



      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account


    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));



      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    

   
)





module.exports = router;