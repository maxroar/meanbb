
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, min: 3 },
  _topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}]
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('User', userSchema)
