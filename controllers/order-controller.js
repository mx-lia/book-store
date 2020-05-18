const orderService = require("../services/order-service");

module.exports = {
  getByCustomerId,
  create,
};

function getByCustomerId(req, res, next) {
  orderService
    .getByCustomerId(req.user.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function create(req, res, next) {
  orderService
    .create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: err.message }));
}
