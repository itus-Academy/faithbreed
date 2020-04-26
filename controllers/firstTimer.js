var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var FirstTimer = require('../model/firstTimer.js')

router.post('/', (req,res)=>{
    // console.log(req.body.contactName)
    // res.send('i can go anywhere');

   


    const output = `
        <p> Hello Faithbreed Admin, you have just received a form input from a FIRST TIMER </p>
        <h3>The table below shows the contact details</h3>
        
        <table border ="1" cell-padding="2" >
            <tr>
                <td>Name:<td>
                <td>${ req.body.fullname}<td>
            </tr>
             <tr>
                <td>BirthDate:<td>
                <td>${ req.body.birthdate}<td>
            </tr>
             <tr>
                <td>Gender:<td>
                <td>${ req.body.gender}<td>
            </tr>
            <tr>
                <td>Email:<td>
                <td>${ req.body.email}<td>
            </tr>
            <tr>
                <td>Phone Number:<td>
                <td>${ req.body.phone}<td>
            </tr>
            <tr>
                <td>State:<td>
                <td>${ req.body.state}<td>
            </tr>
            <tr>
                <td>What platform are you Joining us from:<td>
                <td>${ req.body.exampleRadios}<td>
            </tr>
            <tr>
                <td>Preferred Method of Contact:<td>
                <td>${ req.body.exampleRadiosi}<td>
            </tr>
            <tr>
                <td>How can we hekp you?:<td>
                <td>${ req.body.questions}<td>
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
        subject: "FIRST TIMER FEEDBACK ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body 
      });


      transporter.sendMail(infos, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        console.log("Message sent: %s", info.messageId);
        // res.redirect('/firsttime')
    });
    




    const firstTimer = new FirstTimer({
        name : req.body.fullname,

        birthDate : req.body.birthDate,

        gender : req.body.gender,

        email : req.body.email,

        phone : req.body.phone,

        state : req.body.state,

        platform : req.body.exampleRadios,

        methodOfContact : req.body.exampleRadiosi,

        help : req.body.questions,
    }).save((err,firstTimer)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/firsttime');
        }
    })
      



      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account


    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));



      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    

   
)





module.exports = router;