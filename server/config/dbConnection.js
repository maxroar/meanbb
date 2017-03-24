
var mongoose = require('mongoose')

// name me the DB you want to use
var CONNECTION_STRING = 'meanbb'

mongoose.connect(`mongodb://localhost/${CONNECTION_STRING}`)
mongoose.Promise = global.Promise // override mongooses promise functionality
