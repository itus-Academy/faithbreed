
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
   
    blogTitle : String,

    blogAuthor : String,

    blogDate : Date,

    blogCategory : String,

    blogContent: String,

    blogImage : String
})

module.exports = mongoose.model('blogger', BlogSchema);