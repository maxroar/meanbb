
angular.module('myApp')
.controller('AnswerCtrl', ['$scope','$routeParams', 'UserFactory', '$location', 'TopicFactory', 'AnswerFactory', function($scope, $routeParams, UserFactory, $location, TopicFactory, AnswerFactory) {

  $scope.hello = ['world']
  $scope.topicId = $routeParams.topicID;
  $scope.topic = {};
  $scope.answers = [];

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
