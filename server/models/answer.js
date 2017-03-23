
var mongoose = require('mongoose')

var answerSchema = new mongoose.Schema({
  text: {type: String, required: true, min: 10},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
  _comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0}
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Answer', answerSchema)
