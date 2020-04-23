const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
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

async function authenticate ({ email, password }) {
    const customer = await Customer.findOne({ where: { email: email } });
    if(customer && await argon2.verify(password, customer.passwordHash)) {
        const accessToken = jwt.sign({ email: customer.email }, JWT_SECRET, { expiresIn: '20m' });
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
    if (await Customer.findOne({ where: { email: customer.email } })) {
        throw 'Email "' + customer.email + '" is already taken';
    }
    const newCustomer = new Customer(customer);
    if (customer.password) {
        newCustomer.passwordHash = await argon2.hash(customer.password);
    }
    await newCustomer.save();
}

async function update(id, customerParams) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw 'Customer not found';
    if (customer.email !== customerParams.email && await Customer.findOne({ where: { email: customerParams.email } })) {
        throw 'Email "' + customerParams.email + '" is already taken';
    }
    if (customerParams.password) {
        customerParams.hash = await argon2.hash(customerParams.password);
    }
    Object.assign(customer, customerParams);
    await customer.save();
}

async function remove(id) {
    await Customer.destroy({ where: { id } });
}