var Book = module.exports = function (data) {
  this.config = data.config;
  this.app = data.app;
  this.log = data.log;
  this.db = data.db;

  //define express routes
  this.app.get("/books", this.list.bind(this));
};

Book.prototype.list = function (req, res) {
  var model = this.db.model("Book");
  model.find({}, function (err, books) {
    if (err) {
      res.json([]);
    } else {
      res.json(books);
    }
  });
};