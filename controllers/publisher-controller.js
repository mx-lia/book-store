const publisherService = require("../services/publisher-service");

module.exports = {
  getAll,
  create,
};

function getAll(req, res, next) {
  publisherService
    .getAll()
    .then((publishers) => res.json(publishers))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  publisherService
    .create(req.body)
    .then((publisher) => res.json(publisher))
    .catch((err) => res.status(500).json({ message: err.message }));
}
