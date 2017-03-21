
var users = require('../controllers/users')

function routes(app) {

  app.post('/api/login', users.login);
  app.get('/api/getUserSession', users.getUserSession);
  app.get('/api/logout', users.logout);

}

module.exports = routes
