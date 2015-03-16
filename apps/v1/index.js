var Middleware = require('./services/middleware');

module.exports = function (data) {
  /*
    This code is ran in clustered processes and is
    the entry point into your application

    Modify objects within the application scope
    prior to initialization

    data.name: The name of the application
    data.path: The path of the application
    data.gryd: Global application environment variables
    data.global: Global Express object if routes are needed on /
    data.app: Express application
    data.log: Bunyan logger
    data.db: Mongoose db connection
    data.config: Application configuration
   */

  data.Middleware = new Middleware(data);
};