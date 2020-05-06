const customerService = require("../services/customer-service");

const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

module.exports = {
  authentificate,
  getById,
  update,
  remove,
};

function authentificate(req, res, next) {
  try {
    req.login(req.user, { session: false }, async (error) => {
      if (error) return next(error);
      const customer = req.user;
      const body = { id: customer.id, email: customer.email };
      const token = jwt.sign({ user: body }, JWT_SECRET);
      let options = {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        signed: false,
      };
      return res.cookie("jwt", token, options).redirect("http://localhost:3000/");
    });
  } catch (error) {
    return next(error);
  }
}

function getById(req, res, next) {
  customerService
    .getById(req.user.id)
    .then((customer) =>
      customer ? res.status(200).json(customer) : res.sendStatus(404)
    )
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
