const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const { Customer } = require("../sequelize");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

module.exports = {
  getById,
  getByEmail,
  create,
  findOrCreateByEmail,
  update,
};

async function getById(id) {
  return await Customer.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  });
}

async function getByEmail(email) {
  return await Customer.findOne({
    where: { email: email },
  });
}

async function findOrCreateByEmail(customer) {
  let [newCustomer, created] = await Customer.findOrCreate({
    attributes: {
      exclude: ["password"],
    },
    where: { email: customer.email },
    defaults: customer,
  });
  return newCustomer;
}

async function create(customer) {
  return await Customer.create(customer, {
    attributes: {
      exclude: ["password"],
    },
  });
}

async function update(id, customer) {
  await Customer.update(customer, {
    where: { id: id },
  });
  return customer;
}