
angular.module('myApp')
.factory('AnswerFactory', ['$http', function($http) {

  var answers = [];
  var factory = {}

  factory.addAnswer = function(data, callback){
    $http.post(`/api/addAnswer/${topicId}`, data)
      .then(function(res){
        var data = res.data;
        callback(null, data.answers)
      })
  }


  return factory

}])
