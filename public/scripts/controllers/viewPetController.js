myApp.controller('viewPetController', ['$scope', '$http', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/pets'
  }).then(function successCallback(response) {
    $scope.pets = response.data;
    console.log('got em =', response);
  }, function errorCallback(response) {
    console.log('err');
  });
}]);
