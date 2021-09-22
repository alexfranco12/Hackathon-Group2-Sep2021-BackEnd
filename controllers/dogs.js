const express = require('express');
const dogs = express.Router();
const Dog = require('../models/dogs.js');

// Create Route
dogs.post('/', async (req, res) => {
    Dog.create(req.body, (error, createdDog) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdDog)
    })
});

// Index Route
dogs.get('/', (req, res) => {
    Dog.find({}, (err, foundDogs) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundDogs)
    })
});

// Show/Detail Route
dogs.get('/:id', (req, res) => {
    Dog.findById(req.params.id, (err, foundDog) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundDog)
    })
});

module.exports = dogs;