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
      console.log(err);
      res.sendStatus(500);
    }else{
      // created
      res.sendStatus(201);
    }
  });
});

/* Gets all pets */
router.get('/', function(req, res) {
  console.log('in pets get');
  res.sendStatus(200);
});

router.post('/', function(req, res) {
  console.log('in pets post');
  res.sendStatus(200);
});

module.exports = router;
