
angular.module('myApp')
.controller('UsersCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.hello = ['world']
  $scope.loginForm = {}

  $scope.loginUser = function(){
  	UserFactory.loginUser($scope.loginForm.username, function(data){
  		console.log(data);
  	})
  	console.log($scope.loginForm)
  }


}])
