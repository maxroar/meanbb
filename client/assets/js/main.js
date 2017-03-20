
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
    .otherwise({
      redirectTo: '/'
    })
})
