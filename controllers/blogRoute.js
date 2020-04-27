
var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const blog = require('../model/blog.js');
const blog2 = require('../model/blog.js');
const sermon = require('../model/sermon.js');
const Devotional = require('../model/devotional.js');



const storage2 = multer.diskStorage({
    
    destination: './public/uploads/blog/devotional',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
})

const upload2 = multer({
    storage : storage2
}).fields([
    {name: 'devotionalImage'},
    {name: 'devotionalFile'},

]
    
)

router.post('/devotional', (req,res)=>{
     
    upload2(req,res,(err)=>{
        if(err){
            res.send(err);
        }else{
            console.log(req.files.devotionalImage[0].destination);
            console.log("the form is " + req.body.devotionalImage);
           

            const devotional = new Devotional({
                devotionalTitle: req.body.devotionalTitle,
                devotionalAuthor : req.body.devotionalAuthor,
                devotionalDate : req.body.devotionalDate,
                devotionalExcerpt : req.body.devotionalExcerpt,
                devotionalImage: req.files.devotionalImage[0].destination + '/' +  req.files.devotionalImage[0].filename ,
                devotionalFile : req.files.devotionalFile[0].destination + '/' +  req.files.devotionalFile[0].filename
            }).save((err,devotional)=>{
                if(err) return console.error(err);
                console.log('very good')
                res.redirect('/admin/posts')
            });
        }
    })
    


})


const storage = multer.diskStorage({
    destination: './public/uploads/blog',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
});

const upload = multer({
    storage : storage
}).fields([
    {name: 'blogImage'}
    

]
    
)


router.post('/blogPost', (req,res,next)=>{
    // upload2.single('myImage2')
    //  res.send(req.file.filename);
    
   
    upload(req,res,(err)=>{
        var formattedText = req.body.blogContent
        formattedText = formattedText.replace(/\n\r?/g, '<br />')
        if(err){
            res.send(err);
        }else{
            console.log(req.files.blogImage[0].destination);
            console.log("the form is " + req.body.blogTitle);
            console.log(req.files)
            res.redirect('/admin/adminEvent')



            const Blog = new blog({
                blogTitle: req.body.blogTitle,
                blogAuthor : req.body.blogAuthor,
                blogDate : req.body.blogDate,
                blogCategory : req.body.blogCategory,
                blogExcerpt:req.body.blogExcerpt,
                blogContent: formattedText,
                blogImage : req.files.blogImage[0].destination + '/' +  req.files.blogImage[0].filename
            }).save((err,blogger)=>{
                if(err) return console.error(err);
                console.log('very good')
                
            });
        }
    })
    
});

router.get('/blogpost/:id', (req,res,next)=>{
    // res.send(req.params.id);
blog
    .findOne({ _id : req.params.id})
    .exec(function(err, blog){
        blog2.find()
        .sort({'_id' : -1})
        .exec((err,blogTotal)=>{
            if(err){
                return err
            }else{
                res.render('singleblogpost', {
                    title : 'Single Blog',
                    blogger : blog,
                    blogTotal : blogTotal
                    
                })
            }
        })

       
    })
} );


router.get('/supernatural', (req,res)=>{
    // res.send('we are ere');
    blog
        .find({ blogCategory : 'supernatural' })
        .sort({'_id' : -1 })
        .exec((err, blogger)=>{
            if(err){
                res.send(err)
            }else{
                sermon
                .find({})
                .sort({'sermonDate' : -1})
                .exec((err,sermons)=>{
                  
                    if(err){
                       res.send(err);
                    }else{
                        res.render('categories',{
                            title : 'Supernatural',
                            blog  : blogger,
                            sermons:sermons
                        } )
                    }
                })
            }
})
})

router.post('/blogUpdates/:id', (req,res)=>{
    
    console.log("I am"  + req.body.blogTitle)
    console.log(req.params.id)
    let items = {}
    
    items.blogTitle =  req.body.blogTitle,
    items.blogExcerpt = req.body.blogExcerpt
    items.blogContent = req.body.blogContent,
    items.blogDate = req.body.blogDate
    
    console.log(items.blogTitle)
    let query  = { _id : req.params.id};
    
   

    blog
        .update(query, items, function(err){

            if(err){

                console.log(err)
            }else{

                res.redirect('/admin/adminBlog')
            }
        })

});

router.post('/blogDelete/:id', (req,res)=>{
    
    blog.findByIdAndRemove({_id : req.params.id}).then((blog)=>{
        res.redirect('/admin/adminBlog')
    })




});



router.get('/leadership', (req,res,next)=>{
    const pagination = req.query.pagination
    ? parsesInt(req.query.pagination)
    : 2; 
    const page = req.query.page ? parseInt(req.query.page):1
    blog
        .find({ blogCategory : 'leadership' })
        .limit(pagination)
        .sort({'_id' : -1 })
        .exec((err, blogger)=>{
            sermon
                .find({})
                .sort({'sermonDate' : -1})
                .exec((err,sermons)=>{
                       
            if(err){
                console.log(err)
            }else{
                res.render('categories',{
                    title : 'Leadership',
                    blog  : blogger,
                    sermons:sermons
                } )
            }
                })
        
        })
})


router.get('/growth', (req,res,next)=>{
    blog
        .find({ blogCategory : 'growth' })
        .sort({'_id' : -1 })
        .exec((err, blogger)=>{
            console.log(blogger);
            if(err){
                console.log(err)
            }else{

                sermon
                    .find({})
                    .sort({'sermonDate' : -1})
                    .exec((err, sermons)=>{
                        res.render('categories',{
                            title : 'Growth',
                            blog  : blogger,
                            sermons:sermons
                        } )
                    })
              
            }
        })
})

router.get('/devotional', (req,res)=>{
    sermon
        .find({})
        .sort({'sermonDate' : -1})
        .exec((err,sermons)=>{
            if(err){
                console.log(err)
            }else{
                Devotional
                        .find({})
                        .sort({'devotionalDate':-1})
                        .exec((err,devotionals)=>{
                            res.render('devotional',{
                                title : 'Devotional',
                                sermons:sermons,
                                devotional:devotionals
                            })
                        })
            }

          
        })
   
})


// router.get('blogpost/leadership', (req,res,next)=>{
//     blog.find({categories : req.params.cat})
//     .exec((err,bloggers)=>{

//         if(err){
//             console.log(err);

//         }else{
//             res.render('categories', {
//                 title : req.params.cat
//             });
//         }
//     })
// })


// router.get('blogpost/growth', (req,res,next)=>{
//     blog.find({categories : req.params.cat})
//     .exec((err,bloggers)=>{

//         if(err){
//             console.log(err);

//         }else{
//             res.render('categories', {
//                 title : req.params.cat
//             });
//         }
//     })
// })

// router.post('/sermonPost', (req,res)=>{
//     console.log('we re here ');

// });

module.exports = router;