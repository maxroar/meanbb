
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', '$location', 'PollFactory', function($scope, UserFactory, $location, PollFactory) {


	$scope.user = {};
	$scope.polls = [];
	$scope.pollForm = {};

	UserFactory.getUserSession(function(user){
		if (user) {
			$scope.user = user;
		}else {
			$location.url('/');
		}
		console.log(user);
	})
	
	PollFactory.getAllPolls(function(polls){
		$scope.polls = polls;
	})

	$scope.logout = function(){
	  	UserFactory.logout(function(success){
	  		if (success) {
	  			$scope.user = {};
	  			$location.url('/')
	  		}
  	})
  }

  



}])
