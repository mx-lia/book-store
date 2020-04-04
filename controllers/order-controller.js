const orderService = require('../services/order-service');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

function getAll(req, res, next) {
    orderService.getAll()
        .then(orders => res.json(orders))
        .catch(err => next(err));
}

function getById(req, res, next) {
    orderService.getById(req.params.id)
        .then(order => order ? res.json(order) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    orderService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    orderService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    orderService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
