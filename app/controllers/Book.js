var Book   = $G("Mod").Book;
var router = $G("Express").Router();

/* List */
router.get('/', function (req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.mFailure(err);
    } else {
      res.success(books);
    }
  });
});

/* Show */
router.get('/:id', function (req, res) {
  var id = req.params['id'];
  Book.findOne({id: id}, function (err, book) {
    if (err) {
      res.mFailure(err);
    } else if (book) {
      res.success(book);
    } else {
      res.failure('E005');
    }
  });
});

/* Create */
router.post('/', function (req, res) {
  var body  = req.body;
  var rules = {
    id: ['required'],
    title: ['required']
  };

  req.GrydValidateBody(rules, function (err) {
    if (err) {
      res.failure('E002', err);
    } else {
      var book = new Book({
        id: body.id,
        title: body.title
      });
      book.save(function (err, book) {
        if (err) {
          res.mFailure(err);
        } else {
          res.success(book);
        }
      });
    }
  });
});

/* Update */
router.put('/:id', function (req, res) {
  var id    = req.params['id'];
  var body  = req.body;
  var rules = {
    id: ['required'],
    title: ['required']
  };

  req.GrydValidateBody(rules, function (err) {
    if (err) {
      res.failure('E002', err);
    } else {
      Book.findOne({id: id}, function (err, book) {
        if (err) {
          res.mFailure(err);
        } else if (book) {
          book.set('id', body.id);
          book.set('title', body.title);
          book.save(function (err, book) {
            if (err) {
              res.mFailure(err);
            } else {
              res.success(book)
            }
          });
        } else {
          res.failure('E005');
        }
      });
    }
  });
});

/* Remove */
router.delete('/:id', function (req, res) {
  var id = req.params['id'];
  Book.remove({id: id}, function (err, num) {
    if (err) {
      res.mFailure(err);
    } else if (num && num.result.n >= 1) {
      res.success();
    } else {
      res.failure('E005');
    }
  });
});

module.exports = router;