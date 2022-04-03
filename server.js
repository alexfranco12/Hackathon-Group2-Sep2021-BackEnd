// DEPENDENCIES
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
const logger = require('morgan')

// CONFIG
const app = express();
const PORT = process.env.PORT || 3003;
const MONGODB_URI =
  process.env.NODE_ENV === "production"
  ? process.env.MONGODB_URI
  : "mongodb://localhost/dogs";

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

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

// Database Error/Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Database Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
})
// The connect method is asynchronous, so we can use
// .then/.catch to run callback functions
// when the connection is opened or errors out.
.then((instance) =>
console.log(`Connected to db: ${instance.connections[0].name}`)
)
.catch((error) => console.log("Connection failed!", error));

db.once('open', () => {
    console.log('connected to mongoose...');
});

// Controllers

app.use('/dogs/users', require('./routes/users'));

const ensureLoggedIn = require('./config/ensureLoggedIn');
const dogsController = require('./controllers/dogs.js');
const placesController = require('./controllers/places.js'); 
app.use('/dogs', dogsController);
app.use('/places', placesController);

// LISTENER
app.listen(PORT, () => { console.log('five by five on', PORT) });