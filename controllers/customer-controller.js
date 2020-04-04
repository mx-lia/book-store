
const customerService = require('../services/customer-service');

module.exports = {
    authenticate,
    register,
    getAll,
    getCurrent,
    getById,
    update,
    remove
};

function authenticate(req, res, next) {
    customerService.authenticate(req.body)
        .then(result => result ? res.json(result) : res.status(400).json({ message: 'Login or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    customerService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    customerService.getAll()
        .then(customers => res.json(customers))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    customerService.getById(req.customer.sub)
        .then(customer => customer ? res.json(customer) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    customerService.getById(req.params.id)
        .then(customer => customer ? res.json(customer) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    customerService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    customerService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
