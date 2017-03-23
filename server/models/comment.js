
var mongoose = require('mongoose')

var commentSchema = new mongoose.Schema({
  text: {type: String, required: true, min: 10},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _answer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}],
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Comment', commentSchema)
