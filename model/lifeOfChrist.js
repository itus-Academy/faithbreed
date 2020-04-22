var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var SermonSchema = new Schema({
   
    sermonTitle : String ,

    sermonTeacher : String,

    sermonContent : String,

    sermonDate : Date,

    sermonPrice : Number,

    sermonImage: String,

    sermonAudio : String
})

module.exports = mongoose.model('sermon', SermonSchema);