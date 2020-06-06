
var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const event = require('../model/event.js') 


const storage = multer.diskStorage({
    destination: './public/uploads/event',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
});

const upload = multer({
    storage : storage
}).fields([

    {
        name: 'eventImage'}
    
]
    

)


router.post('/eventPost', (req,res,next)=>{
    // upload2.single('myImage2')
    //  res.send(req.file.filename);
    upload(req,res,(err)=>{

        if(err){
            res.send(err);
        }else{
            console.log(req.files.eventImage[0].destination);
            console.log("the form is " + req.body.eventName);
            console.log(req.files)
           


            const Event = new event({

                eventName: req.body.eventName,
                eventDate : req.body.eventDate,
                eventContent : req.body.eventContent,
                eventImage : req.files.eventImage[0].destination + '/' + req.files.eventImage[0].filename,
               
            }).save((err,event)=>{
                if(err) return console.error(err);
                console.log('very good')
                res.redirect('/admin/adminEvent')
            });
        }
    })
    
});


router.post('/eventUpdates/:id', (req,res)=>{
    
    console.log("I am"  + req.body.eventName)
    console.log(req.params.id)
    let items = {}
    
    items.eventName =  req.body.eventName,
    items.eventContent = req.body.eventContent,
    items.eventnDate = req.body.eventDate
    
    console.log(items.eventTitle)
    let query  = { _id : req.params.id};
    
   

    event
        .update(query, items, function(err){

            if(err){

                console.log(err)
            }else{

                res.redirect('/admin/adminEvent')
            }
        })

});


router.post('/eventDelete/:id', (req,res)=>{
    
    event.findByIdAndRemove({_id : req.params.id}).then((event)=>{
        res.redirect('/admin/adminEvent')
    })




});

// router.post('/sermonPost', (req,res)=>{
//     console.log('we re here ');

// });



module.exports = router;