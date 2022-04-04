// DEPENDENCIES
require('dotenv').config();

const express = require('express'),
      cookieParser = require('cookie-parser'),
      cors = require('cors'),
      logger = require('morgan'),
      multer = require('multer'),
      upload = multer(),
      app = express(),
      PORT = process.env.PORT || 3003,
      NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'));

// parse multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

// CORS
const whitelist = ['http://localhost:3000', 'http://localhost:3003', 'mongodb://localhost:27017/dogs'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(whitelist.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

require('./routes')(app);

// catch 404
app.use((req, res, next) => {
  // log.error(`Error 404 on ${req.url}.`);
  res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  // log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).send({ status, error: msg });
});

module.exports = app;

// LISTENER
app.listen(PORT, () => { 
  console.log(
    `five by five on port ${app.get('port')} | Environment: ${app.get('env')}`
  ) 
});