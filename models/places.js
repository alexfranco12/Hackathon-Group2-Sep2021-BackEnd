const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String},
    address: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: Number}
    },
    distance: {type: Number},
    fee: {type: Number}
});

module.exports = mongoose.model('Place', placeSchema);