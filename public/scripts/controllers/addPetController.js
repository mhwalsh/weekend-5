myApp.controller('addPetController', ['$scope', '$http', 'PetFactory',
  function($scope, $http, PetFactory) {

  $scope.testStaticPets = PetFactory.hardCodedPets;

  PetFactory.getPets().then(function() {
    $scope.pets = PetFactory.serverPets();
  });

  $scope.addPet = function(name, animalTypeObject, age, image) {
    PetFactory.addPet(name, animalTypeObject, age, image).then(function() {
      $scope.pets = PetFactory.serverPets();
    });
  };

  // still need to move to the factory
  $http({
    method: 'GET',
    url: '/pets/enum'
  }).then(function successCallback(response) {
    $scope.enum = response.data.map(function(type) {
      return {type: type };
    });
    $scope.selected = $scope.enum[0];
    console.log('enum =', $scope.enum);
  }, function errorCallback(response) {
    console.log('err');
  });
}]);
