var bodyParser = require('body-parser');
var locale = require('locale');
var supported = ["en"];

$G("App").use(locale(supported));
$G("App").use($G("Srv").Middleware.locales);
$G("App").use(bodyParser.urlencoded({extended:true}));
$G("App").use(bodyParser.json());

$G("App").get("/books", $G("Srv").Middleware.Auth, $G("Ctrl").Book.list);
$G("App").get("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.show);
$G("App").post("/books", $G("Srv").Middleware.Auth, $G("Ctrl").Book.create);
$G("App").put("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.update);
$G("App").delete("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.remove);


/* Last Middleware - 440 + Error Handler */
$G("App").use(function(req, res, next){
  res.failure('E004');
});
$G("App").use(function(err, req, res, next){
  if(err){
    $G("Log").error(err);
    res.failure();
  } else {
    next();
  }
});