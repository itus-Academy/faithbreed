var express = require('express');
var router = express.Router();
var sermon  = require('../model/sermon.js');
var Blog = require('../model/blog.js')
var event = require('../model/event.js');
var subscribe = require('../model/subscribe.js')
var video = require('../model/video.js')
var partner = require('../model/partnership.js');


router.get('/posts', (req,res,next)=>{
    
    if(req.user){
        console.log('we are here')
        // return next;
        res.render('posts', {
            title: 'AdminPosts'
        } )
    }else{
        console.log('we re gone')
        res.redirect('/admin')
    }
   
    


});

router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/admin')
})

function isAuthenticated(req,res, next){
   
}

router.get('/', (req,res)=>{
    
    res.render('admin', {
        title : 'admin'
    })
})

router.get('/adminsermon', (req,res)=>{
  if(req.user){
    sermon
    .find({})
    .sort({'sermonDate' : -1})
    .exec((err,sermon)=>{
        if(err){
            console.log(err)
        }else{
            
            res.render('adminsermon', {
                title:'Admin Sermon',
                sermons:sermon,

            });
        }
       
    })
  }else{
    res.redirect('/admin')
  }
   
})


router.get('/adminBlog', (req,res)=>{
   if(req.user){
        Blog
        .find({})
        .sort({'_id' : -1})
        .exec((err,blogs)=>{
            if(err){
                console.log(err)
            }else{
                res.render('adminBlog', {
                    title: 'adminBlog',
                    blogs:blogs
                })
            }
        })
   }else{
        res.redirect('/admin')
   }
   
   
   
   
   
})

router.get('/adminEvent', (req,res)=>{
   if(req.user){
        event
        .find({})
        .sort({'_id' : -1})
        .exec((err,events)=>{
            if(err){
                console.log('error')
            }else{
                res.render('adminEvent', {
                    title: 'adminEvent',
                    events:events
                })
            }
        })
   }else{
    res.redirect('/admin')
   }
})



router.get('/subscribers', (req,res)=>{
    subscribe  
            .find({})
            .sort({'_id' : -1})
            .exec((err, subscribe)=>{
                if(err){
                    console.log(err)
                }else{
                    res.render('adminSubscribe', {
                        title: 'admin Subscribe',
                        subscribe : subscribe
                    })
                }
            })
})

router.get('/video', (req,res)=>{
    video  
            .find({})
            .sort({'_id' : -1})
            .exec((err, video)=>{
                if(err){
                    console.log(err)
                }else{
                    res.render('adminVideos', {
                        title: 'admin Videos',
                        video : video
                    })
                }
            })
})


router.get('/partnership', (req,res)=>{
    partner
            .find({})
            .sort({})
            .exec((err, partner)=>{
                if(err){
                    console.log(err)
                }else{
                    res.render('adminPartner', {
                        title: 'admin Partner',
                        partner : partner
                    })
                }
            })
})






module.exports = router;