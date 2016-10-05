myApp.factory('PetFactory', ['$http', function($http) {
  console.log('in pet factory');

  // test harded data
  var hardCodedPets = [
    {name: 'Boomer', age: 5},
    {name: 'LT', age: 45}
  ];

  //placeholder for future pets from server
  var serverPets;

  var getPets = function() {
    var promise = $http({
      method: 'GET',
      url: '/pets'
    }).then(function successCallback(response) {

      serverPets = response.data;

      console.log('got em =', response);
    }, function errorCallback(response) {
      console.log('err');
    });

    return promise;
  };

  //API or export
  return {
    staticPets: hardCodedPets,
    serverPets: function() {
      return serverPets;
    },
    retrievePets: getPets
  };
}]);
