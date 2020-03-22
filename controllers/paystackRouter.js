const express = require("express");
const router = express.Router();
var { v4: uuid } = require("uuid");
const Sermon = require('../model/sermon.js') 
const paystackKey = process.env.PAYSTACK_KEY
const axios = require("axios");

router.get("/initialize-transaction/:sermonId", async (req, res) => {
  try {
      // the transaction url
      const url = "https://api.paystack.co/transaction/initialize/";
      const sermonId = req.params.sermonId;
      const sermon = await Sermon.findOne({ _id : sermonId });
      if(sermon){
        const sermonAudio = sermon.sermonAudio.split('/').splice(2, sermon.sermonAudio.length - 1).join('/');
        const transactionObject = { 
          reference: uuid(), 
          amount: sermon.sermonPrice * 100, 
          email: "skolly150@gmail.com", 
          callback_url: 'http://localhost:8080/'+sermonAudio, 
          channels: ['card', 'bank'],
          metadata: JSON.stringify({ sermonTitle: sermon.sermonTitle })
        };
        const createdTransaction = await axios({
          method: 'post',
          url,
          data: transactionObject,
          headers: {
            "Authorization": `Bearer ${paystackKey}`
          }
        });
        const { authorization_url } = createdTransaction.data.data;
        res.redirect(authorization_url)
      }
      else{
        // what do you want to do here
        res.json({ error: "" })
      }
  } catch (error) {
    // what do you want to do here
    console.log(error)
    res.json({ error })
  }
});

module.exports = router;
