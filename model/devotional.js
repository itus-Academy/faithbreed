var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var devotionalSchema = new Schema({
   
    devotionalTitle : String ,

    devotionalAuthor : String,

    devotionalDate : Date,

    devotionalExcerpt : String,

    devotionalImage : String,

    devotionalFile: String,

})

module.exports = mongoose.model('devotional', devotionalSchema);