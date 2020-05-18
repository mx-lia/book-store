const authorService = require("../services/author-service");

module.exports = {
  getAll,
  create,
};

function getAll(req, res, next) {
  authorService
    .getAll()
    .then((authors) => res.json(authors))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  authorService
    .create(req.body)
    .then((author) => res.json(author))
    .catch((err) => res.status(500).json({ message: err.message }));
}
