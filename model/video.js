var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
    video : String,
    title : String
})

module.exports = mongoose.model('videoUrl', VideoSchema);