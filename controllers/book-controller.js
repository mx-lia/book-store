const bookService = require("../services/book-service");

module.exports = {
  getAll,
  getByIsbn,
  create,
  update,
  remove,
};

function getAll(req, res, next) {
  bookService
    .getAll(
      Number(req.query.limit),
      Number(req.query.page),
      req.query.genre,
      req.query.orderBy,
      req.query.keyword,
      req.query.price,
      req.query.availability
    )
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function getByIsbn(req, res, next) {
  bookService
    .getByIsbn(req.params.isbn)
    .then((book) => res.json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  bookService
    .create(req.body, req.files)
    .then((book) => res.json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function update(req, res, next) {
  bookService
    .update(req.params.isbn, req.body, req.files)
    .then((book) => res.json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function remove(req, res, next) {
  bookService
    .remove(req.params.isbn)
    .then((isbn) => res.json(isbn))
    .catch((err) => res.status(500).json({ message: err.message }));
}
