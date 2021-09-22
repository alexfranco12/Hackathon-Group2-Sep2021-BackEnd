const express = require('express');
const places = express.Router();
const Place = require('../models/places.js');

// Create Route places.post('/', async (req, res) => {
    Place.create(req.body, (error, createdPlace) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdPlace)
    })
});

// Index Route places.get('/', (req, res) => {
    Place.find({}, (err, foundPlaces) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundPlaces)
    })
});

// Show/Detail Route places.get('/:id', (req, res) => {
    Place.findById(req.params.id, (err, foundPlace) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundPlace)
    })
});

// Filter Route

module.exports = places;