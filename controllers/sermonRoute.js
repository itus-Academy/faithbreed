
var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Sermon = require('../model/sermon.js') 


const storage = multer.diskStorage({
    destination: './public/uploads/sermons',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
})

const upload = multer({
    storage : storage
}).fields([
    {name: 'sermonImage'},
    {name: 'sermonAudio'},

]
    
)



router.post('/sermonPost', (req,res,next)=>{
    // upload2.single('myImage2')
    //  res.send(req.file.filename);
 
    upload(req,res,(err)=>{
        if(err){
            res.send(err);
        }else{
            console.log(req.files.sermonImage[0].destination);
            console.log("the form is " + req.body.sermonTitle);
            res.redirect('/admin/adminSermon')

            const sermon = new Sermon({
                sermonTitle: req.body.sermonTitle,
                sermonTeacher : req.body.sermonTeacher,
                sermonContent : req.body.sermonContent,
                sermonPrice : req.body.sermonPrice,
                sermonDate : req.body.sermonDate,
                sermonImage: req.files.sermonImage[0].destination + '/' +  req.files.sermonImage[0].filename ,
                sermonAudio : req.files.sermonAudio[0].destination + '/' +  req.files.sermonAudio[0].filename
            }).save((err,sermon)=>{
                if(err) return console.error(err);
                console.log('very good')
            });
        }
    })
    
});

router.get('/sermonPost/:id', (req,res)=>{

    Sermon
        .findOne({ _id : req.params.id })
        .exec((err, sermons)=>{
            if(err){
                console.log('you have made an error')
            }else{
                res.render('sermondetails', {
                    title:'Sermon Details',
                    sermons: sermons
                })
            }

        })
    // res.send(req.params.id);
   
})



router.post('/sermonUpdates/:id', (req,res)=>{
    
    console.log("I am"  + req.body.sermonTitle)
    console.log(req.params.id)
    let items = {}
    
    items.sermonTitle =  req.body.sermonTitle,
    items.sermonTeacher = req.body.sermonTeacher,
    items.sermonContent = req.body.sermonContent,
    items.sermonPrice = req.body.sermonPrice,
    items.sermonDate = req.body.sermonDate
    
    console.log(items.sermonTitle)
    let query  = { _id : req.params.id};
    
   

    Sermon
        .update(query, items, function(err){

            if(err){

                console.log(err)
            }else{

                res.redirect('/admin/adminSermon')
            }
        })

});


router.post('/sermonDelete/:id', (req,res)=>{
    
    Sermon.findByIdAndRemove({_id : req.params.id}).then((Sermon)=>{
        res.redirect('/admin/adminSermon')
    })




});

// router.post('/sermonPost', (req,res)=>{
//     console.log('we re here ');

// });

module.exports = router;