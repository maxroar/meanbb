var Topic = require('../models/topic')
var User = require('../models/user')
var Answer = require('../models/answer')

var controller = {
	getAllTopics: function(req, res){
		Topic.find({})
			.populate('_user')
			.exec(function(err, topics){
				if (err) {
					console.log('error in getalltopics');
				}else {
					res.json({success: true, topics: topics});
				}
			})
	},

	addTopic: function(req, res){
		console.log(req.body);
		var userId = req.body.userId;

		var topicData = {title: req.body.title,
						category: req.body.category,
						description: req.body.description};

		User.findOne({_id: userId}, function(err, user){
			var newTopic = new Topic(topicData);
			newTopic._user = user._id;

			newTopic.save(function(err, topic){
				user._topics.push(topic);
				user.save(function(err){
					Topic.find({}, function(err, topics){
						res.json({ success: true, topics: topics})
					})
				})
			})
		})

	},

	getSingleTopic: function(req, res) {
		var topicId = req.params.topicId;
		Topic.findOne({_id: topicId})
			.populate('_user')
			.populate('_answers')
			.exec(function(err, topic) {
				if(!topic){
					res.json({success: false, topic: null});
				}else {
					res.json({ success: true, topic: topic});
				}
			})
	}


};
module.exports = controller;