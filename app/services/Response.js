exports.success = function (obj, status) {
  status     = status || 200;
  var output = {success: true, result: obj};
  this.status(status).json(output);
};

exports.failure = function (code, obj) {
  code       = code || "E000";
  var output = {success: false, code: code, message: "An unknown error has occurred", error: obj};
  var status = 500;
  if (this.locales.hasOwnProperty(code)) {
    var msg        = this.locales[code];
    output.message = msg.message;
    status         = msg.statusCode;
  } else {
    $G("Log").error("Invalid error code", code);
  }
  this.status(status).json(output);
};

exports.mFailure = function (obj) {
  switch (obj.code) {
    case 11000:
      this.failure("E010");
      break;
    default:
      this.failure();
      break;
  }
};