const customerService = require("../services/customer-service");

const passport = require("passport");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

module.exports = {
  authentificate,
  getAll,
  getById,
  update,
  remove,
};

function authentificate(req, res, next) {
  try {
    req.login(req.user, { session: false }, async (error) => {
      if (error) return next(error);
      const body = { id: req.user.id, email: req.user.email };
      const token = jwt.sign({ customer: body }, JWT_SECRET);
      return res.json({ token });
    });
  } catch (error) {
    return next(error);
  }
}

function getAll(req, res, next) {
  customerService
    .getAll()
    .then((customers) => res.json(customers))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  customerService
    .getById(req.params.id)
    .then((customer) => (customer ? res.json(customer) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function update(req, res, next) {
  customerService
    .update(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function remove(req, res, next) {
  customerService
    .remove(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
