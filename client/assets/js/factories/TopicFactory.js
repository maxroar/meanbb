
angular.module('myApp')
.factory('TopicFactory', ['$http', function($http) {

  var topics = [];
  var factory = {}

  factory.getAllTopics = function(callback){
    $http.get('/api/getAllTopics')
      .then(function(res){
        var data = res.data;
        topics = data.topics;
        callback(topics);
      })
  }

  factory.addTopic = function(data, callback){
    $http.post('/api/addTopic', data)
      .then(function(res){
        var data = res.data;
        callback(null, data.topics)
      })
  }

  factory.getSingle = function(topicId, callback){
    $http.get(`/api/topic/${topicId}`)
      .then(function(res){
        var data = res.data;
        if(!data.success) {
          callback(true, null)
        }else {
          callback(null, data.topic)
        }
      })
  }

  return factory

}])
