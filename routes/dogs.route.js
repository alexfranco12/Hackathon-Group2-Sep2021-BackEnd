const express = require('express');
const router = new express.Router();

const dogsController = require('../controllers/dogsController');
const Dogs = require('../models/dogs');

/*
*  DOG ROUTES
*/
router.get('/', dogsController.index);
router.post('/', dogsController.dog_create);
router.get('/:id', dogsController.dog_detail);
router.patch('/:id', dogsController.dog_update);
router.delete('/:id', dogsController.dog_delete);


module.exports = router;