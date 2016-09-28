myApp.controller('viewPetController', ['$scope', '$http', 'PetFactory', function($scope, $http, PetFactory) {

  $scope.testStaticPets = PetFactory.hardCodedPets;

  if(PetFactory.serverPets() === undefined){
    console.log('undefined');
    PetFactory.getPets().then(function() {
      $scope.pets = PetFactory.serverPets();
      console.log('scope pets', $scope.pets);
    });
  }else{
    console.log('not undefined');
    $scope.pets = PetFactory.serverPets();
  }

  //$scope.id would be good too
  $scope.deletePet = function(id) {
    PetFactory.deletePet(id).then(function(response) {

      PetFactory.getPets().then(function() {
        $scope.pets = PetFactory.serverPets();
      });
    });
  };
}]);
