const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    name: {type: String, title: 'Name', required: true},
    location: mongoose.ObjectId,
    age: {type: Number, title: 'Age', required: true},
    photo: [{type: String, title: 'Photo'}],
    tagline: {type: String},
    description: {type: String, title: 'Description'},
    breed: [{ type: String, required: true }],
    weight: {type: Number},
    goodWithDogs: {type: Boolean},
    houseTrained: {type: Boolean},
    vaccinated: {type: Boolean},
    sex: {type: String},
    fixed: {type: Boolean},
    color: {type: String}
});

module.exports = mongoose.model('Dog', dogSchema);