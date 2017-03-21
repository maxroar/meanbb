
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {


	$scope.user = {};

	UserFactory.getUserSession(function(user){
		if (user) {
			$scope.user = user;
		}else {
			$location.url('/');
		}
		console.log(user);
	})
  $scope.hello = ['dashboard']

  $scope.logout = function(){
  	UserFactory.logout(function(success){
  		if (success) {
  			$scope.user = {};
  			$location.url('/')
  		}
  	})
  }



}])
