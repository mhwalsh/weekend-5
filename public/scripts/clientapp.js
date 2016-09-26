console.log('sourced clientapp.js');

var myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when("/about", {
        templateUrl: "/views/partials/about.html",
        controller: "aboutPetController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addPetController"
      }).
      when("/view", {
        templateUrl: "/views/partials/view.html",
        controller: "viewPetController"
      }).
      otherwise({
        redirectTo: "/about"
      });
}]);

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
