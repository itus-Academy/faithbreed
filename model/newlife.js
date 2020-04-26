var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var newLifeSchema = new Schema({
   
    date : Date ,

    name : String,

    gender : String,

    birdthDate : String,

    phone : String,

    email: String,

    application : String,

    prayerChannel : String
})

module.exports = mongoose.model('newlife', newLifeSchema);