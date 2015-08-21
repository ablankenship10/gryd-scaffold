exports.Auth = function (req, res, next) {
  req.authorizedUser = {
    username: "Authed"
  };

  next();
};

exports.locales = function (req, res, next) {
  res.success  = $G("Srv").Response.success;
  res.failure  = $G("Srv").Response.failure;
  res.mFailure = $G("Srv").Response.mFailure;
  try {
    res.locales = require('../locale/' + req.locale);
    next();
  } catch (e) {
    $G("Log").error(e);
    res.status(500).json({success: false, code: "E000", message: "An unknown error has occurred"});
  }
};