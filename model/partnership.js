
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var PartnershipSchema = new Schema({
   
    fullname : String,

    address : String,

    city: String,

    telephone : String,

    email: String,

   
})

module.exports = mongoose.model('partnership', PartnershipSchema);