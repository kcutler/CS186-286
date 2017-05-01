var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
require('./app_api/models/db');

var routesApi = require('./app_api/routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'app_client', 'other'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(cookieParser());

app.use('/api', routesApi);
app.use(express.static(path.join(__dirname, 'app_client')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});


var server = app.listen(app.get('port'), function() {
       console.log('I am listening on port ' + server.address().port);
});


module.exports = app;