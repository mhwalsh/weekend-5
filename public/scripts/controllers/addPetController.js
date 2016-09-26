myApp.controller('addPetController', ['$scope', '$http', function($scope, $http) {
  $scope.addPet = function(name, animalTypeObject, age, image) {
    var dataToSend ={
      name: name,
      animal_type: animalTypeObject.type,
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
