const customerService = require("../services/customer-service");

const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

const rolesConfig = require("../config/roles-config");

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
      const body = { id: customer.id, role: customer.role };
      const token = jwt.sign({ user: body }, JWT_SECRET);
      let options = {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        signed: false,
      };
      if (customer.role == rolesConfig.CUSTOMER_ROLES.admin)
        return res
          .cookie("jwt", token, options)
          .redirect("http://localhost:3000/admin/dashboard");
      else
        return res
          .cookie("jwt", token, options)
          .redirect("http://localhost:3000/account/personal");
    });
  } catch (error) {
    return next(error);
  }
}

function getById(req, res, next) {
  customerService
    .getById(req.user.id)
    .then((customer) =>
      customer ? res.status(200).json({ user: customer }) : res.sendStatus(500)
    )
    .catch((err) => next(err));
}

function update(req, res, next) {
  customerService
    .update(req.user.id, req.body)
    .then((customer) =>
      customer ? res.status(200).json({ user: customer }) : res.sendStatus(500)
    )
    .catch((err) => next(err));
}

function remove(req, res, next) {
  customerService
    .remove(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
