var bodyParser = require('body-parser');

$G("App").use(bodyParser.urlencoded({extended:true}));
$G("App").use(bodyParser.json());

$G("App").get("/books", $G("Srv").Middleware.Auth, $G("Ctrl").Book.list);
$G("App").get("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.show);
$G("App").post("/books", $G("Srv").Middleware.Auth, $G("Ctrl").Book.create);
$G("App").put("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.update);
$G("App").delete("/books/:id", $G("Srv").Middleware.Auth, $G("Ctrl").Book.remove);