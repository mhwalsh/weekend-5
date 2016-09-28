myApp.controller('viewPetController', ['$scope', '$http', 'PetFactory', function($scope, $http, PetFactory) {

  $scope.testStaticPets = PetFactory.hardCodedPets;

  PetFactory.getPets().then(function() {
    $scope.pets = PetFactory.serverPets();
    console.log('scope pets', $scope.pets);
  });

  //$scope.id would be good too
  $scope.deletePet = function(id) {
    console.log('id', id);
    PetFactory.deletePet(id).then(function(response) {

      PetFactory.getPets().then(function() {
        $scope.pets = PetFactory.serverPets();
      });
    });
  };
}]);
