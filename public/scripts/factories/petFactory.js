myApp.factory('PetFactory', ['$http', function($http) {
  console.log('pet factory is running');

  // test with static/hard coded data
  var pets = [
    {
    name: 'bob',
    age: 2
    },
    {
    name: 'george',
    age: 20
    }
  ];

  // declared, but not instanciated variable that will hold retrieved pets
  var serverPets;

  var getPetsPromise = function() {
    console.log('in get pets call in factory');
    var promise = $http({
      method: 'GET',
      url: '/pets'
    }).then(function successCallback(response) {
      serverPets = response.data;
      console.log('factory got em =', response.data);
    }, function errorCallback(response) {
      console.log('err');
    });

    return promise;
  };

   var deletePetPromise = function(id) {
    console.log('clicked delete', id );

    var promise = $http({
      method: 'DELETE',
      url: '/pets/' + id
    }).then(function successCallback(response) {
      console.log('delete res =', response);
    }, function errorCallback(response) {
      console.log('err');
    });

    return promise;
  };

  var addPetPromise = function(name, animalTypeObject, age, image) {
    var dataToSend ={
      name: name,
      animal_type: animalTypeObject.type,
      age: age,
      image: image
    };

    console.log('data to send =', dataToSend);

    //ajax call
    var promise = $http({
      method: 'POST',
      url: '/pets',
      data: dataToSend
    }).then(function successCallback(response) {
      console.log('post resp =', response);
      return getPetsPromise();
    });

    return promise;
  };

  // PUBLIC API object kinda like "exporting"
  return {
    hardCodedPets: pets, // get the static data
    serverPets: function(){
      return serverPets;
    }, // get and return the dynamic data
    // getPets:  function() {
    //   return getPetsPromise;
    // OR getPetsPromise();
    // }
    getPets: getPetsPromise, // call the get data promise
    deletePet: function(id) {
      return deletePetPromise(id);
    },
    addPet: function(name, animalTypeObject, age, image) {
      return addPetPromise(name, animalTypeObject, age, image);
    }
  };
}]);
