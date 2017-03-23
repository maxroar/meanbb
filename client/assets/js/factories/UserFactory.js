
angular.module('myApp')
.factory('UserFactory', ['$http', function($http) {

  var user = {};
  var factory = {}

  factory.getUserSession = function(callback){
  	$http.get('/api/getUserSession')
  		.then(function(res){
  			console.log(res, 'from factory');
  			if (res.data.session.user) {
  				callback(res.data.session.user);
  			}else {
  				callback(null);
  			}
  		})
  }

  factory.loginUser = function(loginForm, callback){
  	$http.post('/api/login', {username: loginForm})
  		.then(function(res){
        var data = res.data;
        if (data.success) {
          user = data.user;
          callback();
        }
  			console.log(res, 'from factory');

  		})
  }

  factory.logout = function(callback){
  	$http.get('/api/logout')
  		.then(function(res){
  			if (res.data.success) {
  				callback(true);
  			}else {
  				callback(false);
  			}
  		})
  }

  return factory

}])
