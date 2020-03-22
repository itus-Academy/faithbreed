var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
   
    
    eventName : String ,

    eventDate : String,

    eventContent : String,

    eventImage : String,

   
})

module.exports = mongoose.model('event', EventSchema);