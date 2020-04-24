const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const { Customer } = require("../sequelize");
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
  findOrCreateByEmail,
  update,
  remove,
};

async function getAll() {
  return await Customer.findAll();
}

async function getById(id) {
  return await Customer.findByPk(id);
}

async function getByEmail(email) {
  return await Customer.findOne({ where: { email: email } });
}

async function findOrCreateByEmail(customer) {
  let [newCustomer, created] = await Customer.findOrCreate({
    where: { email: customer.email },
    defaults: customer,
  });
  return newCustomer;
}

async function create(customer) {
  return await Customer.create(customer);
}

async function update(customer) {
  return await Customer.update(customer, { where: { email: customer.email } });
}

async function remove(id) {
  return await Customer.destroy({ where: { id } });
}
