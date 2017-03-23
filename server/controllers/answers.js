var Topic = require('../models/topic')
var User = require('../models/user')
var Answer = require('../models/answer')

var controller = {

	addAnswer: function(req, res){
		console.log(req.body);
		var userId = req.body.userId;

		var answerData = {text: req.body.text,
						_topic: req.body.topicId,
						_user: userId};

		Topic.findOne({_id: req.data.topicId}, function(err, topic){
			var newAnswer = new Answer(answerData);

			newAnswer.save(function(err, topic){
				topic._answers.push(newAnswer)

				topic.save(function(err){
					Topic.find({}, function(err, topics){
						res.json({ success: true, topics: topics})
					})
				})
			})
		})

	}


};
module.exports = controller;