const favouriteBookService = require("../services/favourite-book-service");

module.exports = {
  getByCustomerId,
  create,
  remove,
};

function getByCustomerId(req, res, next) {
  favouriteBookService
    .getByCustomerId(req.user.id)
    .then((result) => (result ? res.json(result) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function create(req, res, next) {
  favouriteBookService
    .create(req.body.isbn, req.user.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function remove(req, res, next) {
  favouriteBookService
    .remove(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
