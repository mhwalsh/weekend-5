myApp.controller('addPetController', ['$scope', '$http', function($scope, $http) {
  $scope.addPet = function(name, animalType, age, image) {
    var dataToSend ={
      name: name,
      animal_type: animalType,
      age: age,
      image: image
    };

    console.log('data to send =', dataToSend);

    //ajax call
    $http({
      method: 'POST',
      url: '/pets',
      data: dataToSend
    }).then(function successCallback(response) {
      console.log('post resp =', response);
    }, function errorCallback(response) {
      console.log('err');
    });
  };
}]);
