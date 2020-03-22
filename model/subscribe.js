var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var SubscribeSchema = new Schema({
    email : String
})

module.exports = mongoose.model('subscriber', SubscribeSchema);