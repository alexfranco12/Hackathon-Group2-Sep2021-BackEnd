const Dog = require('../models/dogs.js');

/*
 *  DOG CONTROLLERS
*/

// Index Route
exports.index = (req, res) => {
  Dog.find({}).exec((err, dogs) => {
    res.status("200").json(dogs)
  })
}

// Create Route
exports.dog_create = (req, res) => {
  Dog.create(req.body, (error, createdDog) => {
    if (error) {
        res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdDog)
  })
}

// READ: find dog by id #
exports.dog_detail = (req, res) => {
  Dog.findById(req.params.id, (err, foundDog) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundDog)
  });
};

// UPDATE: update a dog in the DB
exports.dog_update = (req, res) => {
  Dog.findOneAndUpdate(
    { 
      _id: req.params.id 
    }, req.body, 
    { 
      new: true 
    })
    .exec(() => {
      res.status(200).send({status: 'ok'})
    });
};

// DELETE: remove dog by id #
exports.dog_delete = (req, res) => {
  Dog.findOneAndDelete({ _id: req.params.id })
  .exec(() => {
    res.status(200).send({status: 'ok'})
  });
};

// Filter Routes
// Filter by distance
exports.dog_distance = (req, res) => {
  Dog.find({ distance: { $lte: req.body.distance }}, (err, foundDogs) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundDogs)
  })
};