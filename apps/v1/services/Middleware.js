var _ = require('lodash');

var Middleware = module.exports = function (data) {
  _.extend(this,data);
};

Middleware.prototype.list = function (req, res, next) {
  next();
};