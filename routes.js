module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/', require('./routes/root.route'));
  app.use('/dogs', require('./routes/dogs.route'));
  app.use('/users', require('./routes/users.route'));
};