
angular.module('myApp')
.controller('TopicsCtrl', ['$scope','$routeParams', 'UserFactory', '$location', 'TopicFactory', function($scope, $routeParams, UserFactory, $location, TopicFactory) {

  $scope.hello = ['world']
  $scope.topicId = $routeParams.topicID;
  $scope.topic = {};

  function init(){
  	UserFactory.getUserSession(function(user){
  		console.log(user);
		if (user) {
			$scope.user = user;
			TopicFactory.getSingle($scope.topicId, function(err, topic){
				if(err){
					$location.url('/dashboard');
				}else {
					$scope.topic = topic;
				}
			})
		}else {
			$location.url('/');
		}
		console.log(user);
	})
  };

  init();



}])
