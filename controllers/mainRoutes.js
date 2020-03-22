var express = require('express');
var router = express.Router();
const sermon = require('../model/sermon.js') 
const bloggers = require('../model/blog.js');
const events = require('../model/event.js')
router.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About'
    })
});

router.get('/events', (req,res)=>{
    events   
        .find({})
        .sort({'_id' : -1})
        .exec((err, events)=>{
            res.render('events', {
                title: 'Events',
                events:events
            })
        })
   
});

router.get('/partnership', (req,res)=>{
    res.render('partner', {
    title: 'partner'
    })
});

router.get('/blog', (req,res)=>{
    const pagination = req.query.pagination
    ? parsesInt(req.query.pagination)
    : 4; 
    const page = req.query.page ? parseInt(req.query.page):1
    bloggers
        .find({})
        .limit(pagination)
        .sort({'_id' : -1 })
        .exec((err,bloggers)=>{

            if(err){
                console.log(err)
            }else{
                res.render('Blog', {
                    title: 'Blog',
                    blog:bloggers
                });
            }
           
        })
    })
  
router.get('/contact', (req,res)=>{
    res.render('contact', {
        title:'contact'
    } )
})


router.get('/store', (req,res)=>{

    const pagination = req.query.pagination
    ? parsesInt(req.query.pagination)
    : 6; 
    const page = req.query.page ? parseInt(req.query.page):1

    sermon
        .find({})
        .skip((page - 1) * pagination)
        .limit(pagination)
        .sort({'_id' : -1})
        .exec(function(err,sermons){
            if(err){
                console.log(err);
            }else{
                res.render('store', {
                    title: 'Store',
                    sermons: sermons
                })
            }
        })

    
});



module.exports = router;