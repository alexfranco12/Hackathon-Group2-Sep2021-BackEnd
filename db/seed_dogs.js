require('dotenv').config();

const mongoose = require('mongoose');

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

const Dogs = require('../models/dogs');

(async function() {

    
    await Dogs.deleteMany({});
    const dogs = await Dogs.create([
      {
          name: 'fd',
          location: places[0],
          age: 1,
          photo: 'df',
          description: 'fd',
          breed: ['oh','hi','mark'],
          size: 'XL',
          color: 'fda'
      } 
    ]);

    console.log(dogs)
  
    process.exit();

})();