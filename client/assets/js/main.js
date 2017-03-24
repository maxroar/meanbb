
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
    .when('/poll/:pollID', {
      templateUrl: 'partials/poll.html',
      controller: 'PollsCtrl'
    })
    .when('/user/:userID', {
      templateUrl: 'partials/user.html',
      controller: 'SingleUserCtrl'
    })
    .when('/poll/newPoll', {
    	templateUrl: 'partials/newPoll.html',
    	controller: 'PollsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
