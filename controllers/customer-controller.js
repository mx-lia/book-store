const customerService = require("../services/customer-service");

const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

const rolesConfig = require("../config/roles-config");

module.exports = {
  authentificate,
  getById,
  update,
};

function authentificate(req, res, next) {
  try {
    req.login(req.user, { session: false }, async (err) => {
      if (err) return res.status(500).json({ message: err.message });
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
          .redirect("https://localhost:3000/admin/dashboard");
      else
        return res
          .cookie("jwt", token, options)
          .redirect("https://localhost:3000/account/personal");
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

function getById(req, res, next) {
  customerService
    .getById(req.user.id)
    .then((customer) => res.status(200).json({ user: customer }))
    .catch((err) => res.status(500).json({ message: err.message }));
}

function update(req, res, next) {
  customerService
    .update(req.user.id, req.body)
    .then((customer) => res.status(200).json({ user: customer }))
    .catch((err) => res.status(500).json({ message: err.message }));
}
