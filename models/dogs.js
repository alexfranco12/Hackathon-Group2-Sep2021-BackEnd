const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    name: {type: String, title: 'Name', required: true},
    location: mongoose.ObjectId,
    age: {type: Number, title: 'Age', required: true},
    photo: [{type: String, title: 'Photo'}],
    description: {type: String, title: 'Description'},
    breed: [{ type: String, required: true }],
    size: {type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']},
    color: {type: String}
});

module.exports = mongoose.model('Dog', dogSchema);