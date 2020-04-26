var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var firstTimerSchema = new Schema({
   
    name : String ,

    birdthDate : String,

    gender : String,

    email : String,

    phone : String,

    country: String,

    state : String,

    platform : String,

    methodOfContact : String,

    help: [{
        type: String,
    
        default: 'user'
      }],

   
})

module.exports = mongoose.model('firstTimer', firstTimerSchema);