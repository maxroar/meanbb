
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
    .when('/poll/:pollId', {
      templateUrl: 'partials/poll.html',
      controller: 'PollsCtrl'
    })
    .when('/newPoll', {
    	templateUrl: 'partials/newPoll.html',
    	controller: 'PollsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
