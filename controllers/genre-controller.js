const genreService = require("../services/genre-service");

module.exports = {
  getAll,
  create,
};

function getAll(req, res, next) {
  genreService
    .getAll()
    .then((genres) => res.json(genres))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  genreService
    .create(req.body)
    .then((genre) => res.json(genre))
    .catch((err) => res.status(500).json({ message: err.message }));
}
