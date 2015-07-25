exports.Auth = function (req, res, next) {
  req.authorizedUser = {
    username: "Authed"
  };

  next();
};