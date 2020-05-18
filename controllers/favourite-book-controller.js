const favouriteBookService = require("../services/favourite-book-service");

module.exports = {
  getByCustomerId,
  create,
  remove,
};

function getByCustomerId(req, res, next) {
  favouriteBookService
    .getByCustomerId(req.user.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  favouriteBookService
    .create(req.body.isbn, req.user.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function remove(req, res, next) {
  favouriteBookService
    .remove(req.params.id)
    .then(() => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}
