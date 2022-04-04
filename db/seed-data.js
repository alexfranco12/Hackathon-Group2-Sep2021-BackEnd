const Dogs = require('../models/dogs');
const Places = require('../models/places');

// Require a json file which contains some dummy data
const dogData = require("./dog-seed.json"); 
const placeData = require("./places-seed.json");

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