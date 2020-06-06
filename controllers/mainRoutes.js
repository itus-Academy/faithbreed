var express = require('express');
var router = express.Router();
const sermon = require('../model/sermon.js') 
const bloggers = require('../model/blog.js');
const events = require('../model/event.js');


router.get('/about', (req,res)=>{
    sermon
        .find({})
        .sort({'sermonDate' : -1})
        .exec((err,sermons)=>{
            if(err){
                console.log(err);
            }else{
                res.render('about', {
                    title: 'About',
                    sermons:sermons
                })
            }
           
        })
  
});

router.get('/events', (req,res)=>{
    events   
        .find({})
        .sort({'_id' : -1})
        .exec((err, events)=>{

            sermon
                .find({})
                .sort({'sermonDate' : -1})
                .exec((err,sermons)=>{
                    res.render('events', {
                        title: 'Events',
                        events:events,
                        sermons:sermons
                    })
                })
          
        })
   
});

router.get('/partnership', (req,res)=>{
    sermon
        .find({})
        .sort({'sermonDate' : -1})
        .exec((err,sermons)=>{
            res.render('partner', {
                title: 'partner',
                sermons:sermons
                })
        })
   
});

router.get('/blog', (req,res)=>{
    const pagination = req.query.pagination
    ? parsesInt(req.query.pagination)
    : 20; 
    const page = req.query.page ? parseInt(req.query.page):1
    bloggers
        .find({})
        .limit(pagination)
        .sort({'_id' : -1 })
        .exec((err,bloggers)=>{
            sermon
                .find({})
                .sort({'sermonDate' : -1})
                .exec((err,sermons)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.render('blog', {
                            title: 'Blog',
                            blog:bloggers,
                            sermons:sermons
                        });
                    }
                })

        })
    })
  
router.get('/contact', (req,res)=>{

    sermon
        .find({})
        .sort({'sermonDate' : -1})
        .exec((err,sermons)=>{
            res.render('contact', {
                title:'contact',
                sermons:sermons
            } )
        })
   
})

router.post('newLife', (req,res)=>{
    res.redirect('/newlife')
})
router.post('firstTime', (req,res)=>{
    res.redirect('/firstime')
})


router.get('/firstTime', (req,res)=>{
    sermon
        .find({})
        .sort({'sermonDate' : -1})
        .exec((err,sermons)=>{
            res.render('firstTimer', {
                title: 'First Timer'
            })
        })
   
})

router.get('/newlife', (req,res)=>{
    sermon
    .find({})
    .sort({'sermonDate' : -1})
    .exec((err,sermons)=>{
        res.render('lifeOfChrist', {
            title: 'life Of Christ'
        })
    })
       
})
   




router.get('/store', (req,res)=>{

    var pagination = req.query.pagination
    ? parsesInt(req.query.pagination)
    : 18; 
    var page = req.query.page ? parseInt(req.query.page):1
   
    sermon
        .find({})
        .skip((page - 1) * pagination)
        .sort({'sermonDate' : -1})
        .limit(pagination)
        .exec((err,sermons)=>{
            sermon.count().exec((err,count)=>{
                if(err){
                    res.render('/');
                }else{
                    res.render('store', {
                        title: 'Store',
                        sermons: sermons,
                        current:page,
                        pages:Math.ceil(count / pagination)
                    })
                }
            })
         
        })

    
});
router.get('/sermon/:page', (req,res)=>{
    var perPage = 18;
    var page = req.params.page || 1

    sermon
        .find({})
        .skip((perPage * page)-perPage)
        .limit(perPage)
        .sort({'sermonDate' : -1})
        .exec(function(err,sermons){
            sermon.count().exec((err,count)=>{
                if(err){
                    res.send(err)
    
                }else{
                    res.render('paginated', {
                        title: 'Store',
                        sermons: sermons,
                        current:page,
                        pages:Math.ceil(count /perPage)
                    })
                    // res.json(
                    //     sermons
                    // )
                }        
            })
               
        })
})



module.exports = router;