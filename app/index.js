var bodyParser = require('body-parser');
var locale     = require('locale');
var supported  = ["en"];

/* App Middleware */
$G("App").use(locale(supported));
$G("App").use($G("Srv").Middleware.locales);
$G("App").use(bodyParser.urlencoded({extended: true}));
$G("App").use(bodyParser.json());

/* V1 Routes */
var V1 = $G("Express").Router();
V1.use("/books", $G("Ctrl").Book);
$G("App").use("/v1", V1);

/* Final Middleware - 404 + Error Handler */
$G("App").use(function (req, res, next) {
  res.failure('E004');
});
$G("App").use(function (err, req, res, next) {
  if (err) {
    $G("Log").error(err);
    res.failure();
  } else {
    next();
  }
});