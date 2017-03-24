var Poll = require('../models/poll')
var User = require('../models/user')

var controller = {
	getAllPolls: function(req, res){
		Poll.find({})
			.populate('_user')
			.exec(function(err, polls){
				if (err) {
					console.log('error in getallpolls');
				}else {
					res.json({success: true, polls: polls});
				}
			})
	},

	newPoll: function(req, res){
		console.log('newpoll route');
	},

	addPoll: function(req, res){
		console.log(req.body);
		var userId = req.body.userId;

		var pollData = {question: req.body.question,
						options: [req.body.option0, req.body.option1, req.body.option2, req.body.option3],
						votes: [0, 0, 0, 0]};

		User.findOne({_id: userId}, function(err, user){
			var newPoll = new Poll(pollData);
			newPoll._user = user._id;

			newPoll.save(function(err, poll){
				user._polls.push(poll);
				user.save(function(err){
					Poll.find({}, function(err, polls){
						res.json({ success: true, polls: polls})
					})
				})
			})
		})

	},

	addVote: function(req, res){
		console.log(req.body);

		var newVal = req.body.oldVal + 1;

		// Poll.findByIdAndUpdate(req.body.pollId, {
		// 	"$set": {poll.votes[req.body.optionId]: newVal}

		// })

	},

	deletePoll: function(req, res){
		console.log(req.body);
		var pollId = req.params.pollId;
		Poll.remove({_id: pollId}, function(err, user){
			console.log('delete in polls.js');
			
		})

	},

	getSinglePoll: function(req, res) {
		var pollId = req.params.pollId;
		Poll.findOne({_id: pollId})
			.populate('_user')
			.exec(function(err, poll) {
				if(!poll){
					res.json({success: false, poll: null});
				}else {
					res.json({ success: true, poll: poll});
				}
			})
	}


};
module.exports = controller;