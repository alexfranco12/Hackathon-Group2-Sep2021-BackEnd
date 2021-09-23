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

const Dogs = require('./models/dogs');
const Places = require('./models/places');

(async function() {

    
    await Places.deleteMany({});
    const places = await Places.create([
        {
            name: 'It Takes A Village',
            phone: '910-514-4176',
            address: {
                street: '1200 S Horner Blvd #4701',
                city: 'Sanford',
                state: 'NC',
                zip: 27331
            },
            distance: 6
        }, {
            name: 'Cross Creek Animal Rescue',
            phone: '919-883-4653',
            address: {
                street: '56 Baron Rogers Way',
                city: 'Sanford',
                state: 'NC',
                zip: 27331
            },
            distance: 6
        }, {
            name: 'Hero Shepherds Breeders',
            phone: '910-585-3565',
            address: {
                street: '815 County Access 15',
                city: 'Dunn',
                state: 'NC',
                zip: 28334
            },
            distance: 18
        }, {
            name: 'Cumberland County Animal Rescue',
            phone: '910-321-6852',
            address: {
                street: '4704 Corporation Dr',
                city: 'Fayetteville',
                state: 'NC',
                zip: 28306
            },
            distance: 3
        }
    ]);
    
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
  console.log(places)

  process.exit();

})();