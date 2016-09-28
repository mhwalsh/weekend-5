myApp.controller('viewPetController', ['$scope', '$http', 'PetFactory',
function($scope, $http, PetFactory) {

  $scope.staticPets = PetFactory.staticPets;

  PetFactory.retrievePets().then(function() {
    $scope.pets = PetFactory.serverPets();
  });

  // $scope.getPets = function() {
  //   $http({
  //     method: 'GET',
  //     url: '/pets'
  //   }).then(function successCallback(response) {
  //     $scope.pets = response.data;
  //     console.log('got em =', response);
  //   }, function errorCallback(response) {
  //     console.log('err');
  //   });
  // };

  $scope.deletePet = function(id) {
    console.log('clicked delete', id );
    $http({
      method: 'DELETE',
      url: '/pets/' + id
    }).then(function successCallback(response) {
      console.log('delete res =', response);
    }, function errorCallback(response) {
      console.log('err');
    });
  };
}]);
