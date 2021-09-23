// Require the model which has a connection to the database
const Dogs = require("../models/dogs");

// Require a json file which contains some dummy data
const seedData = require("./dog-seed.json");

// Remove any preexisting data
Dogs.deleteMany({})
  .then(() => {
    // Insert the dummy data and return it
    // so we can log it in the next .then
    return Dogs.insertMany(seedData);
  })
  // If the insert was successful, we'll see the
  // results in the terminal
  .then(console.log)
  // Log the error if the insert didn't work
  .catch(console.error)
  // Whether it was successful or not, we need to
  // exit the database.
  .finally(() => {
    // Close the connection to Mongo
    process.exit();
  });