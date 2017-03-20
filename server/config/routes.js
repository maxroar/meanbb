
var users = require('../controllers/users')

function routes(app) {

  app.get('/api/login', users.login);

}

module.exports = routes
