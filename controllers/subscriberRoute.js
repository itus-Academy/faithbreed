var express = require('express');
var router = express.Router();
var subscriber = require('../model/subscribe.js');
var video = require('../model/video.js');
router.post('/subscribePost', (req,res)=>{

        const subscribe = new subscriber({

            email: req.body.subscribeInput

    }).save((err,subscribe)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/')
        }
    })
})

router.post('/videoPost', (req,res)=>{
    console.log(req.body.videoUrl)
    const Video = new video({

        video: req.body.videoUrl,
        title : req.body.title

}).save((err,Video)=>{
    if(err){
        console.log(err);
    }else{
        res.redirect('/admin/posts')
    }
})
   
})


module.exports = router;

