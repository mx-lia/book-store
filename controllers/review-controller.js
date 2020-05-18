const reviewService = require("../services/review-service");

module.exports = {
  getByBookIsbn,
  create,
};

function getByBookIsbn(req, res, next) {
  reviewService
    .getByBookIsbn(req.params.isbn)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  reviewService
    .create(req.body.review)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}
