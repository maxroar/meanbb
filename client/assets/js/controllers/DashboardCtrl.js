
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', '$location', 'TopicFactory', function($scope, UserFactory, $location, TopicFactory) {


	$scope.user = {};
	$scope.topics = [];
	$scope.topicForm = {};

	UserFactory.getUserSession(function(user){
		if (user) {
			$scope.user = user;
		}else {
			$location.url('/');
		}
		console.log(user);
	})
	
	TopicFactory.getAllTopics(function(topics){
		$scope.topics = topics;
	})

	$scope.logout = function(){
	  	UserFactory.logout(function(success){
	  		if (success) {
	  			$scope.user = {};
	  			$location.url('/')
	  		}
  	})
  }

  $scope.addTopic = function(){
  	console.log($scope.topicForm);
  	var data = $scope.topicForm;
  	data.userId = $scope.user._id;

  	TopicFactory.addTopic(data, function(err, topics){
  		console.log('err', err);
  		console.log('topics', topics);
  		$scope.topics = topics;
  	})
  }



}])
