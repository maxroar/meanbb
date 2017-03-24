
angular.module('myApp')
.controller('PollsCtrl', ['$scope','$routeParams', 'UserFactory', '$location', 'PollFactory', function($scope, $routeParams, UserFactory, $location, PollFactory) {

  $scope.hello = ['world']
  $scope.pollId = $routeParams.pollId;
  $scope.poll = {};

  function init(){
  	UserFactory.getUserSession(function(user){
  		console.log(user);
		if (user) {
			$scope.user = user;
			PollFactory.getSingle($scope.pollId, function(err, poll){
				if(err){
					$location.url('/dashboard');
				}else {
					$scope.poll = poll;
				}
			})
		}else {
			$location.url('/');
		}
		console.log(user);
	})
  };

  init();

  $scope.addPoll = function(){
  	console.log($scope.pollForm);
  	var data = $scope.pollForm;
  	data.userId = $scope.user._id;

  	PollFactory.addPoll(data, function(err, polls){
  		console.log('err', err);
  		console.log('polls', polls);
  		$scope.polls = polls;
  	})
  }



}])
