
var mongoose = require('mongoose')

var pollSchema = new mongoose.Schema({
  question: { type: String, required: true, min: 8 },
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  options: [{type: String, required: true, min: 3}],
  votes: [{type: Number, default: 0}]
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Poll', pollSchema)
