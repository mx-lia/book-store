const reviewService = require("../services/review-service");

module.exports = {
  getByBookIsbn,
  create,
  remove,
};

function getByBookIsbn(req, res, next) {
  reviewService
    .getByBookIsbn(req.params.isbn)
    .then((result) => (result ? res.json(result) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function create(req, res, next) {
  reviewService
    .create(req.body.review)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function remove(req, res, next) {
  reviewService
    .remove(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
