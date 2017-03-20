
angular.module('myApp')
.factory('UserFactory', ['$http', function($http) {

  var users = []
  var factory = {}

  factory.init = function(callback) {
    callback(users)
  }

  return factory

}])
