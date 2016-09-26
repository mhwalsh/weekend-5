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
