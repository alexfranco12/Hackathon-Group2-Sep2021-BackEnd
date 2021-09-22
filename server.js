// DEPENDENCIES
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
const axios = require('axios');

// CONFIG
const app = express();
const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI;

// MIDDLEWARE
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// CORS
const whitelist = ['http://localhost:3000', 'mongodb://localhost:27017/dogs'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
app.use(cors(corsOptions));

// Database Error/Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// Database Connection
mongoose.connect(MONGODB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
});

// Controllers
const dogsController = require('./controllers/dogs.js');
const placesController = require('./controllers/places.js'); 
app.use('/dogs', dogsController);
app.use('/places', placesController);

// LISTENER
app.listen(PORT, () => { console.log('five by five on ', PORT) });