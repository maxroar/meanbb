
var mongoose = require('mongoose')

var topicSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: {type: String, required: true, min: 10},
  description: {type: String, required: true, min: 10},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Topic', topicSchema)
