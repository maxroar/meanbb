
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'UsersCtrl'
    })
    .when('/dashboard', {
    	templateUrl: 'partials/dashboard.html',
    	controller: 'DashboardCtrl'
    })
    .when('/topic/:topicID', {
      templateUrl: 'partials/topic.html',
      controller: 'TopicsCtrl'
    })
    .when('/user/:userID', {
      templateUrl: 'partials/user.html',
      controller: 'SingleUserCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
