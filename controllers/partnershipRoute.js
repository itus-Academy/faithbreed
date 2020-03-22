var express = require('express');
var router = express.Router();
var partnership = require('../model/partnership.js');

router.post('/partnerPost', (req,res)=>{

        const partner = new partnership({
            
        fullname : req.body.fullname,

        address : req.body.address,

        city: req.body.city,

        telephone : req.body.telephone,

        email: req.body.email

    }).save((err,partner)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/partnership')
        }
    })
})

module.exports = router;

