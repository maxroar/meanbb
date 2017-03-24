
var users = require('../controllers/users')
var polls = require('../controllers/polls')

function routes(app) {

  app.post('/api/login', users.login);
  app.get('/api/getUserSession', users.getUserSession);
  app.get('/api/logout', users.logout);
  // polls route
  app.get('/api/getAllPolls', polls.getAllPolls);
  app.post('/api/addPoll', polls.addPoll);
  app.get('/api/poll/:pollId', polls.getSinglePoll);
  app.get('/api/poll/newPoll', polls.newPoll);
}

module.exports = routes
