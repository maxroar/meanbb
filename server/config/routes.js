
var users = require('../controllers/users')
var topics = require('../controllers/topics')
var answers = require('../controllers/answers')

function routes(app) {

  app.post('/api/login', users.login);
  app.get('/api/getUserSession', users.getUserSession);
  app.get('/api/logout', users.logout);
  // topics route
  app.get('/api/getAllTopics', topics.getAllTopics);
  app.post('/api/addTopic', topics.addTopic);
  app.get('/api/topic/:topicId', topics.getSingleTopic);
  app.post('/api/addAnswer/:topicId', answers.addAnswer);
}

module.exports = routes
