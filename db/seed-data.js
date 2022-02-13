require('dotenv').config();

const mongoose = require('mongoose');
const Dogs = require('../models/dogs');
const Places = require('../models/places');

// Require a json file which contains some dummy data
const dogData = require("./dog-seed.json"); 
const placeData = require("./places-seed.json");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
//   useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

Dogs.deleteMany({}).then(() => {
  // Insert the dummy data and return it so we are able to log the data
  return Dogs.insertMany(dogData);
}).then(console.log)
.catch(console.error)
.finally(() => {
  process.exit();
});

Places.deleteMany({}).then(() => {
  // Insert the dummy data and return it so we are able to log the data
  return Places.insertMany(placeData);
}).then(console.log)
.catch(console.error)
.finally(() => {
  process.exit();
});