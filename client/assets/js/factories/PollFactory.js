
angular.module('myApp')
.factory('PollFactory', ['$http', function($http) {

  var polls = [];
  var factory = {}

  factory.getAllPolls = function(callback){
    $http.get('/api/getAllPolls')
      .then(function(res){
        var data = res.data;
        polls = data.polls;
        callback(polls);
      })
  }

  factory.addPoll = function(data, callback){
    $http.post('/api/addPoll', data)
      .then(function(res){
        var data = res.data;
        callback(data)
      })
  }

  factory.getSingle = function(pollId, callback){
    $http.get(`/api/poll/${pollId}`)
      .then(function(res){
        var data = res.data;
        if(!data.success) {
          callback(true, null)
        }else {
          callback(null, data.poll)
        }
      })
  }

  factory.newPoll = function(callback){
    $http.get('/api/newPoll')
      .then(function(res){
        var data = res.data;
        if(!data.success) {
          callback(true, null)
        }else {
          callback(null, data)
        }
      })
  }

  factory.addVote = function(callback){
    $http.post('/api/addVote')
      .then(function(res){
        var data = res.data;
        callback(data)
      })
  }

  factory.deletePoll = function(pollId, callback){
    $http.get(`/api/deletePoll/${pollId}`)
      .then(function(res){
        if(!data.success){
          callback(true, null)
        }else {
          callback(null, data.poll)
        }
      })
  }

  return factory

}])
