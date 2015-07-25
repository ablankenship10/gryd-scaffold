var Book = $G("Mod").model("Book");

exports.list = function (req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.json([]);
    } else {
      res.json(books);
    }
  });
};

exports.show = function (req, res) {
  var id = req.params['id'];
  Book.findOne({id: id}, function (err, book) {
    if (err) {
      res.json({});
    } else {
      res.json(book);
    }
  });
};

exports.create = function (req, res) {
  var body  = req.body;
  var rules = {
    id: ['required'],
    title: ['required']
  };

  req.GrydValidateBody(rules, function (err) {
    if (err) {
      res.json(err);
    } else {
      var book = new Book({
        id: body.id,
        title: body.title
      });
      book.save(function (err, book) {
        if (err) {
          res.json(err);
        } else {
          res.json(book)
        }
      })
    }
  });
};

exports.update = function (req, res) {
  var id    = req.params['id'];
  var body  = req.body;
  var rules = {
    id: ['required'],
    title: ['required']
  };

  req.GrydValidateBody(rules, function (err) {
    if (err) {
      res.json(err);
    } else {
      Book.findOne({id: id}, function (err, book) {
        if (err) {
          res.json(err);
        } else {
          book.set('id', body.id);
          book.set('title', body.title);
          book.save(function (err, book) {
            if (err) {
              res.json(err);
            } else {
              res.json(book)
            }
          });
        }
      });
    }
  });
};

exports.remove = function (req, res) {
  var id = req.params['id'];
  Book.remove({}, function (err, num) {
    if (err) {
      res.json(err);
    } else if (num == 0) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
};