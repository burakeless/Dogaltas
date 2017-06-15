var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-mate');
var multer = require('multer');

var mongoose = require('mongoose');
//global.db = mongoose.connect('mongodb://hello:hello1@ds133398.mlab.com:33398/rmsress');
mongoose.Promise = global.Promise;
global.db = mongoose.connect('mongodb://hello:hello@ds127842.mlab.com:27842/dogaltas',function (err) {
  if (err){
    console.log(err)
  }
  console.log('login');
});


var index = require('./routes/index');
var users = require('./routes/users');
var image = require('./routes/image');
var admin = require('./routes/admin');

var app = express();
app.engine('ejs', engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/image',image);
app.use('/admin',admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
