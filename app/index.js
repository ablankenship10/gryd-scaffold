$G("App").get("/books", $G("Srv").Auth, $G("Ctrl").Book.list);
$G("App").get("/books/:id", $G("Srv").Auth, $G("Ctrl").Book.show);
$G("App").post("/books", $G("Srv").Auth, $G("Ctrl").Book.create);
$G("App").put("/books/:id", $G("Srv").Auth, $G("Ctrl").Book.update);
$G("App").delete("/books", $G("Srv").Auth, $G("Ctrl").Book.remove);