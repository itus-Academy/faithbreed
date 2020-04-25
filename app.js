var express = require('express');
var app = express();
var port = 8080;
var path = require ('path');
var morgan = require('morgan');
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var User = require('./model/user');
var cookieParser=require('cookie-parser');
var flash  = require('express-flash');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var secret = require ('./config/secret');
const dotenv = require('dotenv');
dotenv.config()

// var router = express.Router();
app.use(cookieParser() );
app.use(session({
     resave:true,
     saveUninitalized: true,
     secret:secret.secretkey,
     store: new MongoStore({url:secret.database, autoReconnect:true})
}));


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req,res,next){
  res.locals.user = req.user;
  next(); 
});





mongoose.connect(secret.database, {useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are already connected to the server database")
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views')); 
app.use('/', express.static('public'));
app.set('view engine', 'ejs');


var userRoutes = require('./controllers/user.js');
app.use('/', userRoutes);


var partnershipRoute = require('./controllers/partnershipRoute.js');
app.use('/partner', partnershipRoute);


var subscriberRoute = require('./controllers/subscriberRoute.js');
app.use('/subscribe', subscriberRoute);

var updatePostRoute = require('./controllers/updatePostRoute.js');
app.use('/', updatePostRoute);

var nodemailer = require('./controllers/nodemailer.js');
app.use('/nodemailer', nodemailer);

var newlifeFeed = require('./controllers/newlife.js');
app.use('/newlifeFeed', newlifeFeed);

var firstTimers = require('./controllers/firstTimer.js');
app.use('/firstTimers', firstTimers);


var blogRoute = require('./controllers/blogRoute.js');
app.use('/blog', blogRoute);

var eventRoute = require('./controllers/eventRoute.js');
app.use('/event', eventRoute);

var mainRoutes = require('./controllers/mainRoutes.js');
app.use('/', mainRoutes);

var adminRoutes = require('./controllers/adminRoutes.js');
app.use('/admin', adminRoutes);

var sermonRoutes = require('./controllers/sermonRoute.js');
app.use('/sermon', sermonRoutes);

var paystackRoutes = require('./controllers/paystackRouter');
app.use('/paystack', paystackRoutes);


app.listen(port, (req,res)=>{
    console.log('server is running on ' + port);
})

 