/* Pets router - API for all things pets. */
var express = require('express');
var router = express.Router();

// require the Pets Model
var Pet = require('../models/petModel');

router.get('/test', function(req, res) {
  var dummyPet = new Pet({
    name: 'nyan',
    animal_type: 'cat',
    age: 42
  });

  dummyPet.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      // created
      res.sendStatus(201);
    }
  }); //end of save
}); //end of test get

/* Gets all pets */
router.get('/', function(req, res) {
  console.log('in pets get');
  Pet.find({}, function(err, foundPets) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(foundPets);
    }
  }); //end of find
}); //end of get

router.get('/enum', function(req, res) {
  res.send(Pet.schema.path('animal_type').enumValues);
});

router.post('/', function(req, res) {
  console.log('in pets post');
  console.log('req.body=', req.body);

  var pet = req.body;

  var petImage;
  if(pet.image){
    petImage = pet.image;
  } // else pet image undefined

  var newIncomingPet = new Pet({
    name: pet.name,
    animal_type: pet.animal_type,
    age: pet.age,
    image: petImage
  });

  newIncomingPet.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.sendStatus(201);
    }
  }); //end of save
}); //end of post

module.exports = router;
