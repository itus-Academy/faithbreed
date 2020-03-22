var express = require('express');
var router = express.Router();
var User = require('../model/user');
var passport = require('passport');
var passportConf = require('../config/passport')
var blog = require('../model/blog.js')
var sermon = require('../model/sermon.js')
var event = require('../model/event');

router.get('/cred', (req,res)=>{
    res.send('we are here')
})


router.get('/', (req,res)=>{
    blog
        .find()
        .sort({'_id' : -1})
        .exec((err,blogs)=>{
            event
                .find({})
                .sort({'_id' : -1})
                .exec((err, events)=>{
                    sermon
                        .find()
                        .sort({'_id' : -1})
                        .exec((err,sermons)=>{
                            if(err){
                                console.log(err)
                            }else{
                                res.render('index', {
                                        title: 'Pneuma Life City Church | Homepage',
                                        blogs: blogs,
                                        sermons:sermons,
                                        events: events
                                    });
                                   
                            }
                        })
                })
        })
    
});

router.post('/create-user', function(req,res,next){
    
    var user = new User();
    user.email= req.body.email;
    user.password = req.body.password;
    
    
    User.findOne({email:req.body.email}, function(err, existingUser){
        if(existingUser){
           
            req.flash( 'errors', 'Account with this email already exists')
            return res.redirect('/admin');
        } else{
            user.save(function(err, user){
                if(err) return next(err);
                // res.json("new user has been created");
                req.login(user, function(err){
                    if(err) return next(err);
                    res.redirect('/admin/posts');
                })
            })
        }
        })
   
    });


    router.post('/login', passport.authenticate('local-login', {
        successRedirect:'/admin/posts',
        failureRedirect:'/admin',
        failureFlash:true
    }));



    
module.exports= router;