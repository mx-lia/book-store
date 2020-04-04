const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Customer } = require('../sequelize');
const JWT_SECRET = require('../config/server-config').JWT_SECRET;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    remove
};

async function authenticate ({ login, password }) {
    const customer = await Customer.findOne({ where: { login: login } });
    if(customer && bcrypt.compareSync(password, customer.passwordHash)) {
        const accessToken = jwt.sign({ login: customer.login }, JWT_SECRET, { expiresIn: '20m' });
            return { accessToken };
    }
}

async function getAll() {
    return await Customer.findAll();
}

async function getById(id) {
    return await Customer.findByPk(id);
}

async function create(customer) {
    if (await Customer.findOne({ where: { login: customer.login } })) {
        throw 'Login "' + customer.login + '" is already taken';
    }
    const newCustomer = new Customer(customer);
    if (customer.password) {
        newCustomer.passwordHash = bcrypt.hashSync(customer.password, 10);
    }
    await newCustomer.save();
}

async function update(id, customerParams) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw 'Customer not found';
    if (customer.login !== customerParams.login && await Customer.findOne({ where: { login: customerParams.login } })) {
        throw 'Login "' + customerParams.login + '" is already taken';
    }
    if (customerParams.password) {
        customerParams.hash = bcrypt.hashSync(customerParams.password, 10);
    }
    Object.assign(customer, customerParams);
    await customer.save();
}

async function remove(id) {
    await Customer.destroy({ where: { id } });
}